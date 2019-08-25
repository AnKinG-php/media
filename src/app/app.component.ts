import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, AlertController, ModalController, LoadingController, ToastController, PopoverController, MenuController } from '@ionic/angular';
import { PlayerComponent } from './media/player/player.component';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Storage } from '@ionic/storage';
import { ApiService } from './media/shared/services/api.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  loading;
  trackData = [{ data: [], status: 0, position: '', duration: '' }];
  track: MediaObject;
  tracksСache = [];
  trackList = [];
  repeat;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private events: Events,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private modal: ModalController,
    private media: Media,
    private nativeAudio: NativeAudio,
    private transfer: FileTransfer,
    private file: File,
    private playerComponent: PlayerComponent,
    private popoverController: PopoverController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
  ) {
    this.initializeApp();

  }

  //Закрытие меню
  closeMenu() {
    this.menu.close();
  }

  //Запуск приложения
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //Проверка токена
    this.storage.get('token').then((val) => {
      if (val != null) {
        this.apiService.checkToken(val);
      }
      else {
        //Временно
        this.apiService.getToken('anking@mail.com', '12345')
        // this.router.navigate(['/mailer/register']);
        // this.events.publish('stopLoading');
      }
    });

    let w8 = interval(100).subscribe(x => {
      if (this.apiService.getAuth()) {

        if (this.apiService.getNewsData()[0].done) {
          this.tracksСache = this.apiService.getTracksСache();
          this.events.publish('stopLoading');
          w8.unsubscribe();
        }

      }
    });

    // setInterval(() => {
    //   this.trackData = this.playerComponent.getTrackData();
    // }, 300);

    //Эвент модального окна отправки сообщения
    this.events.subscribe('openModal', () => {
      this.openModal();
    });


    //Эвент запуска анимации загрузки
    this.events.subscribe('presentLoading', () => {
      this.presentLoading();
    });
    //Эвент остановки анимации закгрузки
    this.events.subscribe('stopLoading', () => {
      setTimeout(() => {
        if (this.loading) {
          this.loading.dismiss();
        }
      }, 1);
    });
    //Эвент открытия окна предупреждения
    this.events.subscribe('presentAlert', (header, subHeader, message) => {
      this.presentAlert(header, subHeader, message);
    });
    //Эвент появления уведомления
    this.events.subscribe('presentToast', (message, time, color) => {
      this.presentToast(message, time, color);
    });

    this.events.subscribe('release', (trackData, trackList) => {

      this.trackList = trackList;
      this.trackData['status'] = 1;
      this.trackData['data'] = [trackData];

      if (this.track) {
        this.track.release();
        this.track.stop();
      }

      let cache = '';

      if (this.tracksСache.length > 0 && this.tracksСache.filter((x) => x.id == trackData['id']).length > 0) {
        cache = this.tracksСache.filter((x) => x.id == trackData['id'])[0].cache;
      }

      if (cache == '') {

        let fileTransfer = this.transfer.create();

        cache = Math.floor(Math.random() * 2).toString() + new Date().getTime();

        fileTransfer.download(trackData['src'], this.file.dataDirectory + cache + '.mp3').then((entry) => {
          //entry.toURL()
          this.start(trackData['src']);
          this.tracksСache.push({ id: trackData['id'], cache: cache });
          this.apiService.setTracksСache(this.tracksСache);
        });
      }
      else {
        this.start(this.file.dataDirectory + cache + '.mp3');
      }
    });

    this.events.subscribe('getTrackData', () => {
      return this.trackData;
    });

    this.events.subscribe('play', () => {
      this.track.play();
    });

    this.events.subscribe('pause', () => {
      this.track.pause();
    });

    this.events.subscribe('stop', () => {
      this.track.stop();
      this.track.release();
    });

    this.events.subscribe('setPosition', (value) => {
      this.track.seekTo(value * 1000);
    });

    this.events.subscribe('next', (id, trackList) => {
      this.events.publish('release', trackList[id], trackList);
    });

    this.events.subscribe('back', (id, trackList) => {
      this.events.publish('release', trackList[id], trackList);
    });

    this.events.subscribe('repeat', (status) => {
      this.repeat = status;
    });

    this.events.subscribe('shuffle', (array) => {
      this.trackList = array;
    });

  }

  start(url) {
    if (this.track) {
      this.track.release();
    }

    this.trackData['status'] = 1;
    this.track = this.media.create(url);
    this.track.play();

    this.track.onStatusUpdate.subscribe(status => {
      this.trackData['status'] = status;
    });

    setInterval(() => {
      this.track.getCurrentPosition().then((position) => {
        this.trackData['duration'] = this.track.getDuration();
        this.trackData['position'] = position;
      });
    }, 300);

    this.track.onSuccess.subscribe(() => {

      if (parseInt(this.trackData['position']) == parseInt(this.trackData['duration'])) {
        let index: number = this.trackList.indexOf(this.trackList.filter(o => o.id == this.trackData['data'][0].id)[0]);
        let id = ++index;

        if (this.repeat) {
          this.start(url);
        }
        else {
          if (index !== -1 && this.trackList[id]) {

            this.events.publish('release', this.trackList[id], this.trackList);
          }
        }
      }


    });

    console.log('url', url);
    this.track.onError.subscribe(error => console.log('Error!', error));
  }

  //Модальное окно
  async openModal() {
    const modal = await this.modal.create({
      component: PlayerComponent,
      componentProps: { trackList: this.trackList, track: this.track, trackData: this.trackData }
    });
    return await modal.present();
  }

  //Загрузка
  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
    });
    await this.loading.present();
  }

  //Окно предупредждения
  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  //Уведомление
  async presentToast(message, time, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: time,
      color: color,
      position: 'bottom',
      cssClass: 'text-center',
      translucent: true
    });
    toast.present();
  }


}
