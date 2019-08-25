import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Events } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Md5 } from 'ts-md5/dist/md5';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, throwError } from 'rxjs';
import { catchError, retry, map, filter, scan } from 'rxjs/operators';

@Injectable()
export class ApiService {

  httpOptionsJson: any = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      'Content-Type': 'application/json',
      "Authorization": "Basic Y2xpZW50OlNpbXBsZVBhc3N3b3JkIyQl"
    })
  }
  httpOptionsQuery: any = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic Y2xpZW50OlNpbXBsZVBhc3N3b3JkIyQl"
    })
  }

  token: string;
  userData: any;
  authDone: boolean;

  newsData = [{ albums: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }], advise: [{ id: 5, author: '5 Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 4, author: '4 Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 3, author: '3 Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }], news: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }], popular: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }], done: false }];


  favoritesData = [{ playlists: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', files: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }], imgSrc: 'assets/Rectangle 4.png' }, { id: 2, title: 'Новый плейлист', files: [{ id: 1, author: 'Новый плейлист', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }], imgSrc: 'assets/Rectangle 4.png' }], myTracks: [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 3, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }, { id: 4, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png', src: 'http://anking.ru/music.mp3' }], done: false }];

  tracksСache = [];


  private handleError(error: HttpErrorResponse) {
    return throwError('-_-');
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private events: Events,
    private httpClient: HttpClient,
    private storage: Storage
  ) {

  }

  getData() {

    // this.storage.remove('newsData');
    // this.storage.remove('favoritesData');
    // this.storage.remove('tracksСache');

    this.storage.get('newsData').then((val) => {
      if (val != null) {
        this.newsData = val;
        this.newsData[0].done = true;
      }
      else {
        this.storage.set('newsData', this.newsData);
        this.newsData[0].done = true;
      }
    });

    this.storage.get('favoritesData').then((val) => {
      if (val != null) {
        this.favoritesData = val;
        this.favoritesData[0].done = true;
      }
      else {
        this.storage.set('favoritesData', this.favoritesData);
        this.favoritesData[0].done = true;
      }
    });


    this.storage.get('tracksСache').then((val) => {
      if (val != null) {
        this.tracksСache = val;
      }
      else {
        this.storage.set('tracksСache', this.tracksСache);
      }
    });

  }

  //Запись скаченных терков
  setTracksСache(tracksСache) {
    this.tracksСache = tracksСache;
    this.storage.set('tracksСache', this.tracksСache);
  }

  //Новостные данные
  getNewsData() {
    return this.newsData;
  }

  //Избранные данные
  getFavoritesData() {
    return this.favoritesData;
  }

  //Данные скаченных треков
  getTracksСache() {
    return this.tracksСache;
  }

  //Получение Токена
  getToken(login, password) {
    const md5 = new Md5();
    let password_hash = md5.appendStr(password).end();
    let data = 'login=' + login + '&password_hash=' + password_hash;

    this.httpClient
      .post('https://api.oneclick.ru:1443/api/user/gettoken', data, this.httpOptionsQuery)
      .pipe(catchError(this.handleError))
      .subscribe((Response) => {
        //console.log('gettoken', Response);
        if (Response['result'] == 'ok') {
          this.token = Response['token'];
          this.storage.set('token', this.token);
          this.storage.set('login', login);
          this.storage.set('password', password);
          this.setUserData(this.token);
        }
      });
  }

  //Проверка Токена
  checkToken(token) {
    this.httpClient
      .post('https://api.oneclick.ru:1443/api/user/checktoken', 'token=' + token, this.httpOptionsQuery)
      .pipe(catchError(this.handleError))
      .subscribe((Response) => {
        if (Response['result'] == 'токен корректный') {
          this.token = token;
          this.setUserData(token);
        }
        else {
          //редирект на авторизацию
          this.getToken('anking@mail.com', '12345') // временно
        }
      });
  }

  //Получение данных пользователя
  setUserData(token) {
    //console.log('token', token)
    this.httpClient
      .post('https://api.oneclick.ru:1443/api/user/item', 'token=' + token, this.httpOptionsQuery)
      .pipe(catchError(this.handleError))
      .subscribe((Response) => {
        console.log(Response);
        this.userData = Response['user'];
        if (Response['result'] == 'ok') {
          this.storage.get('login').then((val) => {
            if (val != null) {
              this.userData['login'] = val;
            }
          });
          this.storage.get('password').then((val) => {
            if (val != null) {
              this.userData['password'] = val;
            }
          });
          this.storage.get('username').then((val) => {
            if (val != null) {
              this.userData['username'] = val;
            }
            this.authDone = true;

          });

          this.getData();
        }
        else {
          //редирект на авторизацию
        }
      });
  }


  //Получение личных данных
  getUserData() {
    return this.userData;
  }

  //Проверка аутификации
  getAuth() {
    return this.authDone;
  }


  //Получение треков из плейлиста
  getPlaylist(id) {
    return this.httpClient
      .get('http://music.oneclick.ru:26480/api/v1/playlists/'+id, this.httpOptionsJson)
      .pipe(catchError(this.handleError))
  }


  //Получение новостных данных
  setNewsData() {

  }
  //Получение избранных данных
  setFavoritesData() {

  }

  //Создание плейлиста
  addPlaylist(title) {
    let data = { id: new Date().getTime(), author: null, title: title, files: [], imgSrc: null }
    //data['client'] = this.userData['id'];
    data['client'] = 1;
    this.favoritesData[0].playlists.push({ id: new Date().getTime(), author: null, title: title, files: [], imgSrc: null });
    this.storage.set('favoritesData', this.favoritesData);
    return this.httpClient
      .post('http://music.oneclick.ru:26480/api/v1/playlists/', data, this.httpOptionsJson)
      .pipe(catchError(this.handleError))
  }

  //Сохранение изменений плейлиста
  savePlaylist(data){
  this.favoritesData[0].playlists = data;
  }

  //Редактирование плейлиста
  editPlatlist(id, data) {
    console.log(id,data)
    //data['client'] = this.userData['id'];
    data['client'] = 1;
    this.favoritesData[0].playlists.filter(x => x.id == id)[0] = data;
    return this.httpClient
      .patch('http://music.oneclick.ru:26480/api/v1/playlists/'+id, data, this.httpOptionsJson)
      .pipe(catchError(this.handleError))
  }

  //Удаление плейлиста
  deletePlatlist(id) {
    return this.httpClient
      .delete('http://music.oneclick.ru:26480/api/v1/playlists/'+id, this.httpOptionsJson)
      .pipe(catchError(this.handleError))
  }


  //Поиск плейлистов и треков
  search(limit, offset, searchString) {
    return this.httpClient
      .get('http://music.oneclick.ru:26480/api/v1/playlists?limit='+limit+'&offset='+offset+'&q='+searchString, this.httpOptionsJson)
      .pipe(catchError(this.handleError))
  }


}
