import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Events, Platform, ModalController, LoadingController, IonVirtualScroll, IonInfiniteScroll, IonSearchbar, ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { trigger, style, animate, transition } from '@angular/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { interval } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.html',
  styleUrls: ['./player.scss'],
  animations: [
    trigger(
      'SlideUp', [
        transition(':enter', [
          style({ transform: 'translatey(50%)', opacity: 0 }),
          animate('.5s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translatey(0%)', opacity: 1 }),
          animate('.5s ease-in-out', style({ transform: 'translatey(50%)', opacity: 0 }))
        ])
      ]
    ),
    trigger(
      'Show', [
        transition(':enter', [
          style({ transform: 'translatey(-50%)', opacity: 0 }),
          animate('.5s ease-in-out', style({ transform: 'translatey(0%)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translatey(0%)', opacity: 1 }),
          animate('.5s ease-in-out', style({ transform: 'translatey(-50%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class PlayerComponent implements OnInit, OnDestroy {

  page;
  title;

  trackData = [{ data: [], status: 0, position: '', duration: '' }];

  trackList = [];
  playlists = [];

  positionValue = 0;
  array = [];
  repeat = false;
  showNext;
  showBack;
  showButtons;

  radioPlaylists = [];

  constructor(
    private platform: Platform,
    private events: Events,
    private router: Router,
    private modal: ModalController,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private apiService: ApiService,
    private storage: Storage
  ) {

    this.page = this.router.url.split("/")[3];
    registerLocaleData(localeRu, 'ru');
  }


  setPosition(event) {
    this.events.publish('setPosition', event);
  }

  toHHMMSS(unix_timestamp) {
    return this.apiService.toHHMMSS(unix_timestamp);
  }

  ngOnInit() {

    if (this.apiService.getFavoritesData()[0].done) {
      // this.title = this.playlists.filter(x => x.id == this.page)[0]['title'];
      this.playlists = this.apiService.getFavoritesData()[0].playlists;

      this.playlists.forEach((item) => {
        this.radioPlaylists.push({name: item['id'], type: 'radio', label: item['title'],value: item['id']});
      });
    }

    this.showButtons = interval(300).subscribe(x => {
      let maxCount = this.trackList.indexOf(this.trackList.filter(o => o.id == this.trackData['data'][0].id)[0]);

      if (maxCount + 1 == this.trackList.length) {
        this.showNext = false;
      }
      else {
        this.showNext = true;
      }
      if (maxCount == 0) {
        this.showBack = false;
      }
      else {
        this.showBack = true;
      }
    });
    console.log(this.trackList);


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
          this.selectAlert();
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

  async selectAlert() {
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
            this.pushToPlaylist(id);
          }
        }
      ]
    });

    await alert.present();
  }



  //Добавление трека в избранные
  addToFavorite(item){
    if (this.apiService.getFavoritesData()[0].myTracks.filter(o => o.id == item.id).length == 0) {
      this.apiService.getFavoritesData()[0].myTracks.push(item);
      this.storage.set('favoritesData', this.apiService.getFavoritesData());
    }
  }

  //Добавление трека в плейлист
  pushToPlaylist(id) {
    if(!this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail']) {
      this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'] = [];
    }
    if(this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'].filter(o => o.id == this.trackData['data'][0].id).length==0) {
      this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'].push(this.trackData['data'][0]);
    }

    this.apiService.editPlatlist(id, this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0])
  }

  play() {
    this.events.publish('play');
    if (this.trackData['position'] < 0) { this.positionValue = 0; }
  }
  pause() {
    this.events.publish('pause');
  }

  next() {
    this.changeRepeat(false);
    let index: number = this.trackList.indexOf(this.trackList.filter(o => o.id == this.trackData['data'][0].id)[0]);
    let id = ++index;

    if (index !== -1 && this.trackList[id]) {
      this.events.publish('next', id, this.trackList);
      this.showBack = true;

      if (id == this.trackList.length) {
        this.showNext = false;
      }
      else {
        this.showNext = true;
      }
    }
    else {
      if (this.repeat) {
        this.events.publish('next', id - 1, this.trackList);
        this.showBack = false;
      }
      else {
        this.showNext = false;
        this.showBack = true;
      }
    }
  }

  back() {
    this.changeRepeat(false);
    let index: number = this.trackList.indexOf(this.trackList.filter(o => o.id == this.trackData['data'][0].id)[0]);
    let id = index - 1;

    if (index !== -1 && this.trackList[id]) {
      this.events.publish('back', id, this.trackList);
      this.showNext = true;

      if (id == this.trackList.length) {
        this.showBack = false;
      }
      else {
        this.showBack = true;
      }
    }
    else {
      if (this.repeat) {
        this.events.publish('back', 0, this.trackList);
        this.showNext = false;
      }
      else {
        this.showNext = true;
        this.showBack = false;
      }
    }
  }

  shuffle() {
    let array = this.trackList;
    for (let i = array.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]]
    }
    this.events.publish('shuffle', array);
  }


  changeRepeat(status) {
    this.repeat = status;
    this.events.publish('repeat', status);
  }


  //Закрытие модального окна
  closeModal() {
    this.modal.dismiss();
  }

  ngOnDestroy() {
    this.showButtons.unsubscribe();
  }

}
