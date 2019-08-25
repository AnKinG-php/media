(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlist-playlist-module"],{

/***/ "./src/app/media/playlist/playlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/media/playlist/playlist.component.ts ***!
  \******************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/filter.pipe */ "./src/app/media/shared/pipes/filter.pipe.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/media/shared/services/api.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(events, route, router, apiService, platform, actionSheetController, alertController, filterPipe, storage, navController) {
        this.events = events;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.filterPipe = filterPipe;
        this.storage = storage;
        this.navController = navController;
        this.slideOpts = {
            zoom: false,
            initialSlide: 0,
            spaceBetween: -25,
            slidesPerView: 2,
            slidesPerColumnFill: 'row',
            speed: 400
        };
        this.playlists = [];
        this.title = '';
        this.myTracks = [];
        this.playlist = this.route.snapshot.paramMap.get('id');
        this.activeRoute = this.router.url.split("/")[2];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default.a, 'ru');
        //Эвент нажатия кнопки Назад
        this.platform.backButton.subscribe(function () {
        });
    }
    //Поиск треков в массиве
    PlaylistComponent.prototype.onSearch = function (event) {
        var search = event.target.value.toLowerCase();
        this.filterSearch = search;
        if (search.length > 0) {
            this.myTracksList = this.filterPipe.transform(this.myTracks, { author: search, title: search }, false);
        }
        else {
            this.myTracksList = this.myTracks;
            this.filterSearch = false;
        }
    };
    PlaylistComponent.prototype.toggleSearchbar = function (type) {
        this.myTracksList = this.myTracks;
        this.filterSearch = false;
    };
    PlaylistComponent.prototype.presentActionSheet = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.stopPropagation();
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: [
                                    {
                                        text: 'Отредактировать',
                                        icon: 'create',
                                        handler: function () {
                                            _this.presentAlert(id);
                                        }
                                    },
                                    {
                                        text: 'Удалить',
                                        icon: 'trash',
                                        handler: function () {
                                            _this.apiService.deletePlatlist(id);
                                            _this.navController.navigateBack('media/' + _this.activeRoute);
                                        }
                                    },
                                    {
                                        text: 'Отмена',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.presentAlert = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Сохранить',
                                    handler: function (alertData) {
                                        _this.editPlaylist(id, alertData);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlaylistComponent.prototype.presentAlertAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Создать',
                                    handler: function (alertData) {
                                        _this.addPlaylist(alertData);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Создание плейлиста
    PlaylistComponent.prototype.addPlaylist = function (alertData) {
        var _this = this;
        if (alertData.title == '') {
            alertData.title = 'Новый плейлист';
        }
        this.playlists.push({ id: 0, title: alertData.title, files: [], imgSrc: 'assets/Rectangle 4.png' });
        setTimeout(function () {
            _this.slide.slideTo(_this.playlists.length - 1);
        }, 100);
    };
    //Редактирование плейлиста
    PlaylistComponent.prototype.editPlaylist = function (id, playlist) {
        if (playlist.title == '') {
            playlist.title = 'Новый плейлист';
        }
        this.playlists.filter(function (x) { return x.id == id; })[0] = playlist;
        this.playlist = playlist;
        this.title = playlist.title;
        this.apiService.editPlatlist(id, playlist);
    };
    PlaylistComponent.prototype.back = function () {
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
    };
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackData = this.events.publish('getTrackData')[0];
        var w8 = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(100).subscribe(function (x) {
            if (_this.apiService.getAuth()) {
                if (_this.playlist) {
                    if (_this.apiService.getFavoritesData()[0].done) {
                        _this.myTracksList = _this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == _this.playlist; })[0].files;
                        _this.myTracks = _this.myTracksList.files;
                        _this.title = _this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == _this.playlist; })[0].title;
                        _this.events.publish('stopLoading');
                        w8.unsubscribe();
                    }
                }
                else {
                    if (_this.apiService.getFavoritesData()[0].done) {
                        _this.myTracksList = _this.apiService.getFavoritesData()[0].playlists;
                        _this.myTracks = _this.myTracksList;
                        _this.events.publish('stopLoading');
                        w8.unsubscribe();
                    }
                }
            }
        });
    };
    //Включение трека
    PlaylistComponent.prototype.release = function (trackData, trackList) {
        var _this = this;
        this.events.publish('release', trackData, trackList);
        this.getTrackDataEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(300).subscribe(function (x) {
            _this.trackData = _this.events.publish('getTrackData')[0];
            _this.track = _this.trackData['track'];
        });
    };
    PlaylistComponent.prototype.play = function () {
        this.events.publish('play');
    };
    PlaylistComponent.prototype.pause = function () {
        this.events.publish('pause');
    };
    //Запуск модального окна проигрователя
    PlaylistComponent.prototype.openModal = function (data) {
        this.events.publish('openModal', data);
    };
    PlaylistComponent.prototype.ngOnDestroy = function () {
        this.events.publish('stopLoading');
        if (this.getTrackDataEvent) {
            this.getTrackDataEvent.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
    ], PlaylistComponent.prototype, "searchbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], PlaylistComponent.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"])
    ], PlaylistComponent.prototype, "virtualScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slide'),
        __metadata("design:type", Object)
    ], PlaylistComponent.prototype, "slide", void 0);
    PlaylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.html */ "./src/app/media/playlist/playlist.html"),
            providers: [_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('FadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatey(0%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('SlideLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatex(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatex(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatex(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatex(50%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('SlideUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatey(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatey(50%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('SlideRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatey(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatex(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translatex(-50%)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./playlist.scss */ "./src/app/media/playlist/playlist.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/media/playlist/playlist.html":
/*!**********************************************!*\
  !*** ./src/app/media/playlist/playlist.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n<ion-buttons>\r\n    <ion-row>\r\n        <ion-col class=\"active\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"headset\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n</ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" *ngIf=\"playlist\">\r\n\r\n  <h1 class=\"title\">\r\n\r\n    <ion-icon class=\"float-right mr-20\" name=\"more\" (click)=\"presentActionSheet(playlist);\"></ion-icon>\r\n    <span class=\"flex\"><ion-icon class=\"float-left mr-20\" name=\"arrow-back\" (click)=\"back();\"></ion-icon> {{ title }}\r\n    </span>\r\n  </h1>\r\n\r\n  <ion-list>\r\n\r\n    <div class=\"serach-bar\" *ngIf=\"myTracks && myTracks.length>0\">\r\n      <ion-searchbar #searchbar [@FadeIn] placeholder=\"Поиск\" clearIcon showCancelButton=\"always\" cancelButtonText=\"Закрыть\" (ionInput)=\"onSearch($event)\" (ionCancel)=\"toggleSearchbar(false)\" (keyup.enter)=\"toggleSearchbar(false)\"></ion-searchbar>\r\n    </div>\r\n\r\n  <h6 class=\"text-center\" *ngIf=\"myTracksList && myTracksList.length==0\"><small>Пусто</small></h6>\r\n\r\n    <ion-virtual-scroll *ngIf=\"myTracksList && myTracksList.length>0\" [items]=\"myTracksList\">\r\n      <div style=\"height: 70px;\" *virtualItem=\"let item;\">\r\n\r\n          <ion-list>\r\n\r\n            <ion-item lines=\"none\" (click)=\"release(item, myTracksList)\">\r\n              <ion-thumbnail slot=\"start\">\r\n                <img *ngIf=\"item.imgSrc\" [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n                <img *ngIf=\"!item.imgSrc\" src=\"assets/nope.png\" alt=\"\">\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h2>{{ item.author }}</h2>\r\n                <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n              </ion-label>\r\n              <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n              <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n            </ion-item>\r\n\r\n\r\n          </ion-list>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-virtual-scroll>\r\n  </ion-list>\r\n\r\n  <br *ngIf=\"trackData['status']\">\r\n  <br *ngIf=\"trackData['status']\">\r\n\r\n\r\n  <div class=\"footer-media-info\" *ngIf=\"trackData['status']\">\r\n    <div class=\"track-duration\" [style.width]=\"(trackData['position'] / this.trackData['duration'] * 100)+'%'\"></div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"icon\" size=\"3\" (click)=\"openModal([{id: 0}])\">\r\n          <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"text-center\" (click)=\"openModal([{id: 0}])\">\r\n          <small *ngFor=\"let data of trackData['data']\">\r\n           {{ data.author }}<br />\r\n            <small>{{ data.title }}</small></small>\r\n        </ion-col>\r\n        <ion-col class=\"text-right icon\" size=\"3\" >\r\n          <ion-spinner name=\"crescent\" color=\"secondary\" *ngIf=\"trackData['status']<=1\"></ion-spinner>\r\n          <ion-icon name=\"pause\" *ngIf=\"trackData['status']==2\" (click)=\"pause()\"></ion-icon>\r\n          <ion-icon name=\"play\" *ngIf=\"trackData['status']>2\" (click)=\"play()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-content class=\"background\" *ngIf=\"!playlist\">\r\n\r\n  <h1 class=\"title\">\r\n\r\n    <ion-icon class=\"float-right mr-20\" name=\"add-circle-outline\" (click)=\"presentAlertAdd();\"></ion-icon>\r\n    <span class=\"flex\"><ion-icon class=\"float-left mr-20\" name=\"arrow-back\" (click)=\"back();\"></ion-icon> Все плейлисты\r\n    </span>\r\n  </h1>\r\n\r\n  <ion-list>\r\n\r\n    <div class=\"serach-bar\" *ngIf=\"myTracks && myTracks.length>0\">\r\n      <ion-searchbar #searchbar [@FadeIn] placeholder=\"Поиск\" clearIcon showCancelButton=\"always\" cancelButtonText=\"Закрыть\" (ionInput)=\"onSearch($event)\" (ionCancel)=\"toggleSearchbar(false)\" (keyup.enter)=\"toggleSearchbar(false)\"></ion-searchbar>\r\n    </div>\r\n\r\n  <h6 class=\"text-center\" *ngIf=\"myTracksList && myTracksList.length==0\"><small>Пусто</small></h6>\r\n\r\n    <ion-virtual-scroll *ngIf=\"myTracksList && myTracksList.length>0\" [items]=\"myTracksList\">\r\n      <div style=\"height: 70px;\" *virtualItem=\"let item;\">\r\n\r\n          <ion-list>\r\n\r\n            <ion-item lines=\"none\" [routerLink]=\"['/media/favorites/playlist/'+item.id]\" routerDirection=\"forward\">\r\n              <ion-thumbnail slot=\"start\">\r\n                  <img *ngIf=\"item.imgSrc\" [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n                  <img *ngIf=\"!item.imgSrc\" src=\"assets/nope.png\" alt=\"\">\r\n              </ion-thumbnail>\r\n              <ion-label *ngIf=\"item.author\">\r\n                <h2>{{ item.author }}</h2>\r\n                <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"!item.author\">\r\n                <h2>{{ item.title }}</h2>\r\n                <h3 class=\"text-muted\" *ngIf=\"item.tracks\">{{ item.tracks.length }} треков</h3>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n\r\n          </ion-list>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-virtual-scroll>\r\n  </ion-list>\r\n\r\n  <br *ngIf=\"trackData['status']\">\r\n  <br *ngIf=\"trackData['status']\">\r\n\r\n\r\n  <div class=\"footer-media-info\" *ngIf=\"trackData['status']\">\r\n    <div class=\"track-duration\" [style.width]=\"(trackData['position'] / this.trackData['duration'] * 100)+'%'\"></div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"icon\" size=\"3\" (click)=\"openModal([{id: 0}])\">\r\n          <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"text-center\" (click)=\"openModal([{id: 0}])\">\r\n          <small *ngFor=\"let data of trackData['data']\">\r\n           {{ data.author }}<br />\r\n            <small>{{ data.title }}</small></small>\r\n        </ion-col>\r\n        <ion-col class=\"text-right icon\" size=\"3\" >\r\n          <ion-spinner name=\"crescent\" color=\"secondary\" *ngIf=\"trackData['status']<=1\"></ion-spinner>\r\n          <ion-icon name=\"pause\" *ngIf=\"trackData['status']==2\" (click)=\"pause()\"></ion-icon>\r\n          <ion-icon name=\"play\" *ngIf=\"trackData['status']>2\" (click)=\"play()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/media/playlist/playlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/media/playlist/playlist.module.ts ***!
  \***************************************************/
/*! exports provided: PlaylistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModule", function() { return PlaylistModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist.component */ "./src/app/media/playlist/playlist.component.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/media/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PlaylistModule = /** @class */ (function () {
    function PlaylistModule() {
    }
    PlaylistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_autosize__WEBPACK_IMPORTED_MODULE_5__["AutosizeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _playlist_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistComponent"] }])
            ],
            declarations: [_playlist_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistComponent"]]
        })
    ], PlaylistModule);
    return PlaylistModule;
}());



/***/ }),

/***/ "./src/app/media/playlist/playlist.scss":
/*!**********************************************!*\
  !*** ./src/app/media/playlist/playlist.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-checkbox {\n  margin-left: 15px; }\n\nion-card {\n  padding-left: 5px; }\n\nion-segment {\n  padding: 10px 15px 0 15px; }\n\n.sc-ion-segment-md-h {\n  padding-top: 0px; }\n\n.footer-media-info {\n  color: #fff;\n  background: #222;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  line-height: 0.8;\n  font-size: 18px;\n  bottom: 0; }\n\n.footer-media-info .icon {\n  font-size: 31px; }\n\n.content-mdeia-list {\n  margin-bottom: 50px; }\n\nion-slides {\n  margin: 25px 0 5px 0; }\n\n.swiper-slide {\n  width: 50%;\n  display: inline-block; }\n\nion-slide img {\n  width: 80%; }\n\n.track-time {\n  font-size: 11px;\n  margin-right: 15px; }\n\nion-item, ion-list-header {\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\nion-list-header {\n  padding-right: 20px;\n  text-transform: none; }\n\nion-list ion-item img {\n  border-radius: 10px; }\n\nion-list {\n  margin-bottom: 15px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.absolute-right {\n  position: absolute;\n  right: 20px;\n  color: red;\n  margin: 10px;\n  z-index: 9999; }\n\n.serach-bar {\n  background: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 9999; }\n\nion-list-header.mb-m10 {\n  margin-bottom: -10px; }\n\n.track-duration {\n  width: 0%;\n  height: 4px;\n  margin-bottom: -4px;\n  border-top: 1px solid #000;\n  background: #F7CC34; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvcGxheWxpc3QvQzpcXFVzZXJzXFxhbmtpbmdcXNCf0YDQvtC10LrRgtGLXFxJb25pYzRcXE9uZUNsaWNrXFxtZWRpYS9zcmNcXGFwcFxcbWVkaWFcXHBsYXlsaXN0XFxwbGF5bGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsVUFBUyxFQUNWOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1Ysc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBQ2Q7O0FBR0Q7RUFDRSxpQkFBZ0I7RUFDaEIseUJBQWdCO0VBQWhCLGlCQUFnQjtFQUNoQixTQUFRO0VBQ1IsY0FBYSxFQUNkOztBQUVEO0VBQ0UscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsVUFBUztFQUNULFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsMkJBQTBCO0VBQzFCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL3BsYXlsaXN0L3BsYXlsaXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2hlY2tib3gge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuaW9uLXNlZ21lbnQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAwIDE1cHg7XHJcbn1cclxuLnNjLWlvbi1zZWdtZW50LW1kLWgge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLmZvb3Rlci1tZWRpYS1pbmZvIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDAuODtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5mb290ZXItbWVkaWEtaW5mbyAuaWNvbntcclxuICBmb250LXNpemU6IDMxcHg7XHJcbn1cclxuLmNvbnRlbnQtbWRlaWEtbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgbWFyZ2luOiAyNXB4IDAgNXB4IDA7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pb24tc2xpZGUgaW1nIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4udHJhY2stdGltZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0sIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubWItNTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5hYnNvbHV0ZS1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcblxyXG4uc2VyYWNoLWJhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlci5tYi1tMTB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi50cmFjay1kdXJhdGlvbiB7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XHJcbiAgYmFja2dyb3VuZDogI0Y3Q0MzNDtcclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=playlist-playlist-module.js.map