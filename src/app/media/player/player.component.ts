import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Events, Platform, ModalController, LoadingController, IonVirtualScroll, IonInfiniteScroll, IonSearchbar, ActionSheetController } from '@ionic/angular';
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

  positionValue = 0;
  array = [];
  repeat = false;
  showNext;
  showBack;
  showButtons;


  constructor(
    private platform: Platform,
    private events: Events,
    private router: Router,
    private modal: ModalController,
    private actionSheetController: ActionSheetController,
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
    if (unix_timestamp > 0) {
      var date = new Date(unix_timestamp * 1000);
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      return minutes.substr(-2) + ':' + seconds.substr(-2);
    }
    else {
      var minutes = "00";
      var seconds = "00";
      return minutes + ':' + seconds;
    }
  }

  ngOnInit() {
    this.title = 'Название плейлиста или альбома';

    this.showButtons = interval(300).subscribe(x => {
      let maxCount = this.trackList.indexOf(this.trackList.filter(o => o.id == this.trackData['data'][0].id)[0]);

      if (maxCount+1 == this.trackList.length) {
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
    let id = index-1;

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

  shuffle(){
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
