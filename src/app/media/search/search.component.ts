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
  selector: 'app-search',
  templateUrl: 'search.html',
  styleUrls: ['search.scss'],
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
export class SearchComponent implements OnInit, OnDestroy {

  slideOpts = {
    zoom: false,
    initialSlide: 0,
    spaceBetween: -25,
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    speed: 400
  };
  filterSearch;

  playlists = [];

  searchList = [];

  trackData;
  track: MediaObject;

  news = [];

  popular = [];
  slideShow;
  getTrackDataEvent;

  @ViewChild(IonSearchbar) searchbar: IonSearchbar;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

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

    this.slideOpts.spaceBetween = -window.innerWidth / 12;
    this.slideShow = true;

    //Эвент нажатия кнопки Назад
    this.platform.backButton.subscribe(() => {

    });

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.slideShow = false;
    this.slideOpts.spaceBetween = -event.target.innerWidth / 12;
    setInterval(() => {
      this.slideShow = true;
    }, 100);
  }

  //Поиск треков и плейлистов на сервере
  onSearch(event) {
    let search = event.target.value.toLowerCase();
    if (search.length > 0) {
      this.filterSearch = search;
      this.playlists = [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', tracks: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }], imgSrc: 'assets/Rectangle 4.png' }, { id: 2, title: 'Новый плейлист', tracks: [{ id: 1, author: 'Новый плейлист', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }], imgSrc: 'assets/Rectangle 4.png' }, { id: 3, title: 'Новый плейлист', tracks: [{ id: 1, author: 'Новый плейлист', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }], imgSrc: 'assets/Rectangle 4.png' }];

      if (this.searchList.length > 5) {
        this.searchList = [];
      }
      this.searchList.push({ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' });
    }
    else {
      this.searchList = [];
      this.playlists = [];
      this.filterSearch = false;
    }

    if (this.virtualScroll) {
      this.virtualScroll.checkRange(0);
    }

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

  toggleSearchbar(type) {
    this.searchList = [];
    this.playlists = [];
    this.filterSearch = false;

    if (this.virtualScroll) {
      this.virtualScroll.checkRange(0);
    }
  }



  async presentActionSheet(item) {
    event.stopPropagation();

    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'В избранное',
        icon: 'heart',
        handler: () => {

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
        inputs: [
          {
            name: '1',
            type: 'radio',
            label: 'Плейлист 1',
            value: '1'
          },
          {
            name: '2',
            type: 'radio',
            label: 'Плейлист 2',
            value: '2'
          }
        ],
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

  //Добавление терка в плейлист
  pushToPlaylist(item, id){
    this.playlists.filter(x => x.id==id)[0].files.push({ id: item.id, author: item.author, title: item.title, time: item.time, imgSrc: item.imgSrc, src: item.src });
    this.apiService.editPlatlist(id, this.playlists.filter(x => x.id==id))
    .subscribe((Response) => {
      console.log(Response);
    });
  }

  ngOnInit() {

    this.trackData = this.events.publish('getTrackData')[0];

    let w8 = interval(100).subscribe(x => {
      if (this.apiService.getAuth()) {

        if (this.apiService.getFavoritesData()[0].done) {
          this.playlists = this.apiService.getFavoritesData()[0].playlists;
        }
        if (this.apiService.getNewsData()[0].done) {

          this.news = this.apiService.getNewsData()[0].news;
          this.popular = this.apiService.getNewsData()[0].popular;

          this.events.publish('stopLoading');
          w8.unsubscribe();
        }

      }
    });
  }


  //Запуск модального окна проигрователя
  openModal(data) {
    this.events.publish('openModal', data);
  }

  ngOnDestroy() {
    this.events.publish('stopLoading');
    if (this.getTrackDataEvent) {
      this.getTrackDataEvent.unsubscribe();
    }
  }

}
