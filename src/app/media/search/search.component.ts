import { Component, OnInit, OnDestroy, LOCALE_ID, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Events, Platform, ModalController, LoadingController, IonVirtualScroll, IonInfiniteScroll, IonSearchbar, ActionSheetController, AlertController } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { ApiService } from '../shared/services/api.service';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { interval } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: 'search.html',
  styleUrls: ['search.scss'],
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

  playlists;

  searchList;
  searchPlaylists;

  trackData;
  track: MediaObject;

  news = [];

  popular = [];
  slideShow;
  getTrackDataEvent;
  radioPlaylists = [];

  showLoading;
  showMore = true;
  limit = 100;

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
    private filterPipe: FilterPipe,
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

  //Подгрузка треков
  loadData(event) {
    this.apiService.searchTracks(this.limit, this.searchList.length, this.filterSearch)
      .subscribe((Response) => {

        var myArr: any[] = [Response];

        if ((<any>myArr[0]).length < this.limit) {
          this.showMore = false;
        }
        else {
          this.showMore = true;
        }

        (<any>myArr[0]).forEach((item) => {
          this.searchList.push(item);
        });

        if (this.virtualScroll) {
          this.virtualScroll.checkEnd();
          event.target.complete();
        }
      });
  }

  //Поиск треков и плейлистов на сервере
  onSearch(event) {
    let search = event.target.value.toLowerCase();
    if (search.length > 0) {
      this.filterSearch = search;
      this.showLoading = true;
      this.searchPlaylists = null;
      this.searchList = null;
      this.showMore = true;

      this.searchPlaylists = this.filterPipe.transform(this.playlists, { artist: search, title: search }, false);

      this.apiService.searchPlaylists(this.limit, 0, this.filterSearch)
        .subscribe((Response) => {
          this.searchPlaylists = Response;
        });


      this.apiService.searchTracks(this.limit, 0, this.filterSearch)
        .subscribe((Response) => {

          var myArr: any[] = [Response];

          this.searchList = Response;
          this.showLoading = false;

          if ((<any>myArr[0]).length < this.limit) {
            this.showMore = false;
          }
          if (this.virtualScroll) {
            this.virtualScroll.checkRange(0);
          }
        });
    }
    else {
      this.searchList = [];
      this.searchPlaylists = [];
      this.filterSearch = false;
      if (this.virtualScroll) {
        this.virtualScroll.checkRange(0);
      }
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
    addToFavorite(item){
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

    let w8 = interval(100).subscribe(x => {
      if (this.apiService.getAuth()) {

        if (this.apiService.getFavoritesData()[0].done) {
          this.playlists = this.apiService.getFavoritesData()[0].playlists;

          this.playlists.forEach((item) => {
            this.radioPlaylists.push({ name: item['id'], type: 'radio', label: item['title'], value: item['id'] });
          });
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
