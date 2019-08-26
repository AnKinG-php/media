import { Component, OnInit, OnDestroy, LOCALE_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Events, Platform, NavController, ModalController, LoadingController, IonVirtualScroll, IonInfiniteScroll, IonSearchbar, AlertController, ActionSheetController } from '@ionic/angular';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage';
import { ApiService } from '../shared/services/api.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { interval } from 'rxjs';


@Component({
  selector: 'app-playlist',
  templateUrl: 'playlist.html',
  styleUrls: ['playlist.scss'],
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
export class PlaylistComponent implements OnInit, OnDestroy {

  playlist;
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
  title = '';

  myTracksList;
  myTracks = [];
  track: MediaObject;

  trackData;
  activeRoute;
  getTrackDataEvent;

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
    private storage: Storage,
    private navController: NavController,

  ) {
    this.playlist = this.route.snapshot.paramMap.get('id');
    this.activeRoute = this.router.url.split("/")[2];

    registerLocaleData(localeRu, 'ru');

    //Эвент нажатия кнопки Назад
    this.platform.backButton.subscribe(() => {

    });

  }

  //Поиск треков в массиве
  onSearch(event) {
    let search = event.target.value.toLowerCase();
    this.filterSearch = search;
    if (search.length > 0) {
      this.myTracksList = this.filterPipe.transform(this.myTracks, { author: search, title: search }, false);
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


  async presentActionSheet(id) {
    event.stopPropagation();

    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Отредактировать',
          icon: 'create',
          handler: () => {
            this.presentAlert(id);
          }
        },
        {
          text: 'Удалить',
          icon: 'trash',
          handler: () => {
            this.apiService.deletePlatlist(id);
            this.navController.navigateBack('media/' + this.activeRoute);
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

  async presentActionSheetTrack(item) {
    event.stopPropagation();

    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Удалить',
          icon: 'trash',
          handler: () => {
            const index: number = this.myTracksList.indexOf(item);
            if (index !== -1) {
              this.myTracksList.splice(index, 1);
              this.virtualScroll.checkRange(0);
            }

            this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == this.playlist)[0].files_detail = this.myTracksList;
            this.apiService.editPlatlist(this.playlist, this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == this.playlist)[0])
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

  async presentAlert(id) {
    const alert = await this.alertController.create({
      header: 'Редактирование плейлиста',
      message: 'Придумайте название для вашего плейлиста или альбома',
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
          text: 'Сохранить',
          handler: (alertData) => {
            this.editPlaylist(id, alertData);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertAdd() {
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

  toHHMMSS(unix_timestamp){
    return this.apiService.toHHMMSS(unix_timestamp);
  }

  //Создание плейлиста
  addPlaylist(alertData) {
    if (alertData.title == '') { alertData.title = 'Новый плейлист'; }

    let newData = this.apiService.addPlaylist(alertData.title)
    this.playlists.push(newData);

  }

  //Редактирование плейлиста
  editPlaylist(id, playlist) {
    if (playlist.title == '') { playlist.title = 'Новый плейлист'; }

    this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0]['title'] = playlist.title;
    this.title = playlist.title;
    this.apiService.editPlatlist(id, this.apiService.getFavoritesData()[0].playlists.filter(x => x.id == id)[0])
  }

  back() {
    if (!this.playlist) {
      this.navController.navigateBack('media/' + this.activeRoute);
    }
    else {
      if (this.activeRoute == 'favorite') {
        this.navController.navigateBack('media/' + this.activeRoute + '/playlist');
      }
      else {
        this.navController.navigateBack('media/' + this.activeRoute);
      }

    }

  }

  ngOnInit() {

  this.trackData = this.events.publish('getTrackData')[0];

    let w8 = interval(100).subscribe(x => {
      if (this.apiService.getAuth()) {
        if (this.playlist) {
          if (this.apiService.getFavoritesData()[0].done && this.apiService.getFavoritesData()[0].playlists.filter((x) => x.id == this.playlist)[0]) {
            if(!this.apiService.getFavoritesData()[0].playlists.filter((x) => x.id == this.playlist)[0].files_detail) {
              this.apiService.getFavoritesData()[0].playlists.filter((x) => x.id == this.playlist)[0].files_detail = [];
            }
            this.myTracksList = this.apiService.getFavoritesData()[0].playlists.filter((x) => x.id == this.playlist)[0].files_detail;
            this.myTracks = this.myTracksList.files_detail;

            this.title = this.apiService.getFavoritesData()[0].playlists.filter((x) => x.id == this.playlist)[0].title;

            this.events.publish('stopLoading');
            w8.unsubscribe();

          }
        }
        else {

          if (this.apiService.getFavoritesData()[0].done) {

            this.myTracksList = this.apiService.getFavoritesData()[0].playlists;
            this.myTracks = this.myTracksList;

            this.events.publish('stopLoading');
            w8.unsubscribe();
          }

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
