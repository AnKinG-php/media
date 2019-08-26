import { Component, OnInit, OnDestroy, LOCALE_ID, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Events, Platform, ModalController, LoadingController, IonVirtualScroll, IonInfiniteScroll, IonSearchbar, ActionSheetController, AlertController } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage';
import { ApiService } from '../shared/services/api.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { interval } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: 'news.html',
  styleUrls: ['news.scss'],
  animations: [
    trigger(
      'FadeIn', [
        transition(':enter', [
          style({ transform: 'translatey(0%)', opacity: 0 }),
          animate('.3s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ])
      ]
    ),
    trigger(
      'SlideLeft', [
        transition(':enter', [
          style({ transform: 'translatex(50%)', opacity: 0 }),
          animate('.5s ease-in-out', style({ transform: 'translatex(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translatex(0%)', opacity: 1 }),
          animate('0.3s ease-in-out', style({ transform: 'translatex(50%)', opacity: 0 }))
        ])
      ]
    ),
    trigger(
      'SlideUp', [
        transition(':enter', [
          style({ transform: 'translatey(50%)', opacity: 0 }),
          animate('0.5s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translatey(0%)', opacity: 1 }),
          animate('0.5s ease-in-out', style({ transform: 'translatey(50%)', opacity: 0 }))
        ])
      ]
    ),
    trigger(
      'SlideRight', [
        transition(':enter', [
          style({ transform: 'translatey(50%)', opacity: 0 }),
          animate('1s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translatex(0%)', opacity: 1 }),
          animate('0.5s ease-in-out', style({ transform: 'translatex(-50%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class NewsComponent implements OnInit, OnDestroy {

  slideOpts = {
    zoom: false,
    initialSlide: 1,
    spaceBetween: 0,
    speed: 400
  };

  albums = [];

  advise = [];

  news = [];

  popular = [];

  playlists = [];

  trackData;
  track: MediaObject;

  slideShow;
  contentShow = true;
  getTrackDataEvent;
  radioPlaylists = [];

  constructor(
    private events: Events,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private storage: Storage
  ) {
    registerLocaleData(localeRu, 'ru');

    this.slideOpts.spaceBetween = -window.innerWidth + 300;
    this.slideShow = true;

    //Эвент нажатия кнопки Назад
    this.platform.backButton.subscribe(() => {

    });

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.slideShow = false;
    this.contentShow = false;
    this.slideOpts.spaceBetween = -event.target.innerWidth + 300;
    setTimeout(() => {
      this.slideShow = true;
      this.contentShow = true;
    }, 100);
  }

  //Включение трека
  release(trackData, trackList) {
    this.events.publish('release', trackData, trackList);
    this.getTrackDataEvent = interval(300).subscribe(x => {
      this.trackData = this.events.publish('getTrackData')[0];
      this.track = this.trackData['track'];
    });
  }

  play() {
    this.events.publish('play');
  }
  pause() {
    this.events.publish('pause');
  }

  async presentActionSheet(item) {
    event.stopPropagation();

    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'В избранное',
        icon: 'heart',
        handler: () => {
          this.addToFavorite(item);
        }
      },
      {
        text: 'Добавить в плейлист',
        icon: 'list',
        handler: () => {
          this.selectAlert(item);
        }
      },
      {
        text: 'Поделиться',
        icon: 'share',
        handler: () => {

        }
      }, {
        text: 'Отмена',
        role: 'cancel',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();

  }


  async selectAlert(item) {
    const alert = await this.alertController.create({
      header: 'Выберите плейлист',
      message: 'Выберите плейлист для добавления трека',
      inputs: this.radioPlaylists,
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Добавить',
          handler: (id) => {
            this.pushToPlaylist(item, id);
          }
        }
      ]
    });

    await alert.present();
  }

  //Добавление трека в избранные
  addToFavorite(item) {
    if (this.apiService.getFavoritesData()[0].myTracks.filter(o => o.id == item.id).length == 0) {
      this.apiService.getFavoritesData()[0].myTracks.push(item);
      this.storage.set('favoritesData', this.apiService.getFavoritesData());
    }
  }

  //Добавление трека в плейлист
  pushToPlaylist(item, id) {
    if (!this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail']) {
      this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'] = [];
    }
    if (this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'].filter(o => o.id == item.id).length == 0) {
      this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'].push(item);
    }

    this.apiService.editPlatlist(id, this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0])
  }

  toHHMMSS(unix_timestamp) {
    return this.apiService.toHHMMSS(unix_timestamp);
  }

  ngOnInit() {

    this.trackData = this.events.publish('getTrackData')[0];

    // if (!this.apiService.getNewsData()[0].done) {
    //   this.events.publish('presentLoading');
    // }

    let w8 = interval(100).subscribe(x => {
      if (this.apiService.getAuth()) {

        if (this.apiService.getFavoritesData()[0].done) {
          this.playlists = this.apiService.getFavoritesData()[0].playlists;

          this.playlists.forEach((item) => {
            this.radioPlaylists.push({ name: item['id'], type: 'radio', label: item['title'], value: item['id'] });
          });
        }

        if (this.apiService.getNewsData()[0].done) {
          this.albums = this.apiService.getNewsData()[0].albums;
          this.advise = this.apiService.getNewsData()[0].advise;
          this.news = this.apiService.getNewsData()[0].news;
          this.popular = this.apiService.getNewsData()[0].popular;


          this.events.publish('stopLoading');
          w8.unsubscribe();
        }

      }
    });
  }


  //Запуск модального окна проигрователя
  openModal() {
    this.events.publish('openModal');
  }

  ngOnDestroy() {
    this.events.publish('stopLoading');
    if (this.getTrackDataEvent) {
      this.getTrackDataEvent.unsubscribe();
    }
  }

}
