import { Component, OnInit, OnDestroy, LOCALE_ID, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Events, Platform, ModalController, LoadingController, IonVirtualScroll, IonInfiniteScroll, IonSearchbar, AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage';
import { ApiService } from '../shared/services/api.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { interval } from 'rxjs';


@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.html',
  styleUrls: ['favorites.scss'],
  providers: [FilterPipe],
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
export class FavoritesComponent implements OnInit, OnDestroy {

  userData;
  playlist;
  slideOpts = {
    zoom: false,
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 2,
    slidesPerColumnFill: 'row',
    speed: 400
  };
  filterSearch;

  playlists = [];

  myTracksList;
  myTracks = [];

  track: MediaObject;
  trackData;
  slideShow;
  getTrackDataEvent;
  radioPlaylists = [];

  @ViewChild(IonSearchbar) searchbar: IonSearchbar;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @ViewChild('slide') slide;

  constructor(
    private events: Events,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private filterPipe: FilterPipe,
    private storage: Storage
  ) {
    this.playlist = this.route.snapshot.paramMap.get('playlist');

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

  //Поиск треков в массиве
  onSearch(event) {
    let search = event.target.value.toLowerCase();
    this.filterSearch = search;
    if (search.length > 0) {
      this.myTracksList = this.filterPipe.transform(this.myTracks, { artist: search, title: search }, false);
    }
    else {
      this.myTracksList = this.myTracks;
      this.filterSearch = false;
    }
  }


  toggleSearchbar(type) {
    this.myTracksList = this.myTracks;
    this.filterSearch = false;
  }

  async presentActionSheet(item) {
    event.stopPropagation();

    const actionSheet = await this.actionSheetController.create({
      buttons: [
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
        },
        {
          text: 'Удалить',
          icon: 'trash',
          handler: () => {
            this.removeFromFavorites(item);
          }
        },
        {
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Создать плейлист',
      message: 'Придумайте название для вашего нового плейлиста или альбома',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Название альбома/плейлиста'
        },
      ],
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Создать',
          handler: (alertData) => {
            this.addPlaylist(alertData);
          }
        }
      ]
    });

    await alert.present();
  }

  //Добавление трека в плейлист
  pushToPlaylist(item, id) {
    if(!this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail']) {
      this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'] = [];
    }
    if(this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'].filter(o => o.id == item.id).length==0) {
      this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['files_detail'].push(item);
    }

    this.apiService.editPlatlist(id, this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0])
  }

  //Создание плейлиста
  addPlaylist(alertData) {
    if (alertData.title == '') { alertData.title = 'Новый плейлист'; }

    let newData = this.apiService.addPlaylist(alertData.title)
    if(newData['id']) {
      this.playlists.push(newData);
    }

    setTimeout(() => {
      this.slide.slideTo(this.playlists.length - 1);
    }, 100);

  }

  removeFromFavorites(item){
    const index: number = this.myTracks.indexOf(item);
    console.log(index);
    if (index !== -1) {
      this.myTracks.splice(index, 1);
      this.apiService.getFavoritesData()[0].myTracks.splice(index, 1);
      this.storage.set('favoritesData', this.apiService.getFavoritesData());
      if (this.virtualScroll) {
        this.virtualScroll.checkRange(0);
      }
    }
  }

  toHHMMSS(unix_timestamp){
    return this.apiService.toHHMMSS(unix_timestamp);
  }

  ngOnInit() {

  this.trackData = this.events.publish('getTrackData')[0];

    let w8 = interval(100).subscribe(x => {
      if (this.apiService.getAuth()) {

        if (this.apiService.getFavoritesData()[0].done) {
          this.myTracks = this.apiService.getFavoritesData()[0].myTracks;
          this.userData = this.apiService.getUserData();
          this.myTracksList = this.myTracks;

          this.playlists = this.apiService.getFavoritesData()[0].playlists;

          this.playlists.forEach((item) => {
            this.radioPlaylists.push({name: item['id'], type: 'radio', label: item['title'],value: item['id']});
          });

          if (this.virtualScroll) {
            this.virtualScroll.checkRange(0);
          }

          this.events.publish('stopLoading');
          w8.unsubscribe();
        }

      }
    });

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


  //Запуск модального окна проигрователя
  openModal(data) {
    this.events.publish('openModal', data);
  }

  ngOnDestroy() {
    this.events.publish('stopLoading');
    if(this.getTrackDataEvent) {
      this.getTrackDataEvent.unsubscribe();
    }
  }

}
