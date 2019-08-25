(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "./src/app/media/favorites/favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/media/favorites/favorites.component.ts ***!
  \********************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
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











var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(events, route, router, apiService, platform, actionSheetController, alertController, filterPipe, storage) {
        this.events = events;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.filterPipe = filterPipe;
        this.storage = storage;
        this.slideOpts = {
            zoom: false,
            initialSlide: 0,
            spaceBetween: 0,
            slidesPerView: 2,
            slidesPerColumnFill: 'row',
            speed: 400
        };
        this.playlists = [];
        this.myTracks = [];
        this.playlist = this.route.snapshot.paramMap.get('playlist');
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_8___default.a, 'ru');
        this.slideOpts.spaceBetween = -window.innerWidth / 12;
        this.slideShow = true;
        //Эвент нажатия кнопки Назад
        this.platform.backButton.subscribe(function () {
        });
    }
    FavoritesComponent.prototype.onResize = function (event) {
        var _this = this;
        this.slideShow = false;
        this.slideOpts.spaceBetween = -event.target.innerWidth / 12;
        setInterval(function () {
            _this.slideShow = true;
        }, 100);
    };
    //Поиск треков в массиве
    FavoritesComponent.prototype.onSearch = function (event) {
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
    FavoritesComponent.prototype.toggleSearchbar = function (type) {
        this.myTracksList = this.myTracks;
        this.filterSearch = false;
    };
    FavoritesComponent.prototype.presentActionSheet = function (item) {
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
                                        text: 'Добавить в плейлист',
                                        icon: 'list',
                                        handler: function () {
                                            _this.selectAlert(item);
                                        }
                                    },
                                    {
                                        text: 'Поделиться',
                                        icon: 'share',
                                        handler: function () {
                                        }
                                    },
                                    {
                                        text: 'Удалить',
                                        icon: 'trash',
                                        handler: function () {
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
    FavoritesComponent.prototype.selectAlert = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Добавить',
                                    handler: function (id) {
                                        _this.pushToPlaylist(item, id);
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
    FavoritesComponent.prototype.presentAlert = function () {
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
    //Добавление терка в плейлист
    FavoritesComponent.prototype.pushToPlaylist = function (item, id) {
        this.playlists.filter(function (x) { return x.id == id; })[0].files.push({ id: item.id, author: item.author, title: item.title, time: item.time, imgSrc: item.imgSrc, src: item.src });
        this.apiService.editPlatlist(id, this.playlists.filter(function (x) { return x.id == id; }))
            .subscribe(function (Response) {
            console.log(Response);
        });
    };
    //Создание плейлиста
    FavoritesComponent.prototype.addPlaylist = function (alertData) {
        var _this = this;
        if (alertData.title == '') {
            alertData.title = 'Новый плейлист';
        }
        this.apiService.addPlaylist(alertData.title)
            .subscribe(function (Response) {
            console.log(Response);
            _this.playlists.push({ id: 1, title: alertData.title, files: [], client: _this.userData['id'] });
            _this.apiService.savePlaylist(_this.playlists[0]);
        });
        setTimeout(function () {
            _this.slide.slideTo(_this.playlists.length - 1);
        }, 100);
    };
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackData = this.events.publish('getTrackData')[0];
        var w8 = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(100).subscribe(function (x) {
            if (_this.apiService.getAuth()) {
                if (_this.apiService.getFavoritesData()[0].done) {
                    _this.playlists = _this.apiService.getFavoritesData()[0].playlists;
                    _this.myTracks = _this.apiService.getFavoritesData()[0].myTracks;
                    _this.userData = _this.apiService.getUserData();
                    _this.myTracksList = _this.myTracks;
                    if (_this.virtualScroll) {
                        _this.virtualScroll.checkRange(0);
                    }
                    _this.events.publish('stopLoading');
                    w8.unsubscribe();
                }
            }
        });
        var w81 = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(100).subscribe(function (x) {
            if (_this.apiService.getAuth()) {
                w81.unsubscribe();
                _this.apiService.getPlaylist(1)
                    .subscribe(function (Response) {
                    console.log(Response);
                });
            }
        });
    };
    //Включение трека
    FavoritesComponent.prototype.release = function (trackData, trackList) {
        var _this = this;
        this.events.publish('release', trackData, trackList);
        this.getTrackDataEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(300).subscribe(function (x) {
            _this.trackData = _this.events.publish('getTrackData')[0];
            _this.track = _this.trackData['track'];
        });
    };
    FavoritesComponent.prototype.play = function () {
        this.events.publish('play');
    };
    FavoritesComponent.prototype.pause = function () {
        this.events.publish('pause');
    };
    //Запуск модального окна проигрователя
    FavoritesComponent.prototype.openModal = function (data) {
        this.events.publish('openModal', data);
    };
    FavoritesComponent.prototype.ngOnDestroy = function () {
        this.events.publish('stopLoading');
        if (this.getTrackDataEvent) {
            this.getTrackDataEvent.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
    ], FavoritesComponent.prototype, "searchbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], FavoritesComponent.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"])
    ], FavoritesComponent.prototype, "virtualScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slide'),
        __metadata("design:type", Object)
    ], FavoritesComponent.prototype, "slide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FavoritesComponent.prototype, "onResize", null);
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.html */ "./src/app/media/favorites/favorites.html"),
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
            styles: [__webpack_require__(/*! ./favorites.scss */ "./src/app/media/favorites/favorites.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/media/favorites/favorites.html":
/*!************************************************!*\
  !*** ./src/app/media/favorites/favorites.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n<ion-buttons>\r\n    <ion-row>\r\n        <ion-col class=\"active\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"headset\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n</ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n  <h1 class=\"title\"><span [routerLink]=\"['/media/favorites/playlist/']\" routerDirection=\"forward\">Плейлисты</span>\r\n    <ion-icon (click)=\"presentAlert()\" class=\"float-right mr-20\" name=\"add-circle-outline\"></ion-icon>\r\n  </h1>\r\n\r\n    <!-- <h6 class=\"text-center\" *ngIf=\"playlists && playlists.length==0\"><small>Пусто</small></h6> -->\r\n\r\n  <ion-slides #slide [options]=\"slideOpts\" approxItemHeight=\"50\" *ngIf=\"slideShow\" [@FadeIn]>\r\n      <ion-slide *ngFor=\"let item of playlists\" [routerLink]=\"['/media/favorites/playlist/'+item.id]\" routerDirection=\"forward\">\r\n        <img *ngIf=\"item.imgSrc\" [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n        <img *ngIf=\"!item.imgSrc\" src=\"assets/nope.png\" alt=\"\">\r\n        <h6 class=\"mt-5\" *ngIf=\"item.author\">{{ item.author }}<br /><small class=\"small text-muted\">{{ item.title }}</small></h6>\r\n        <h6 class=\"mt-5\" *ngIf=\"!item.author\">{{ item.title }}<br /><small *ngIf=\"item.files\" class=\"small text-muted\">{{ item.files.length }} треков</small></h6>\r\n      </ion-slide>\r\n    </ion-slides>\r\n<!--\r\n    <div class=\"text-center\">\r\n      <ion-button color=\"light\" shape=\"round\" size=\"small\">Показать все ...</ion-button>\r\n    </div> -->\r\n\r\n  <ion-list>\r\n\r\n    <ion-list-header class=\"mb-m10\">\r\n      <h4 class=\"strong\">Мои треки</h4>\r\n    </ion-list-header>\r\n\r\n    <div class=\"serach-bar\" *ngIf=\"myTracks && myTracks.length>0\">\r\n      <ion-searchbar #searchbar [@FadeIn] placeholder=\"Поиск\" clearIcon showCancelButton=\"always\" cancelButtonText=\"Закрыть\" (ionInput)=\"onSearch($event)\" (ionCancel)=\"toggleSearchbar(false)\" (keyup.enter)=\"toggleSearchbar(false)\"></ion-searchbar>\r\n    </div>\r\n\r\n  <!-- <h6 class=\"text-center\" *ngIf=\"myTracksList && myTracksList.length==0\"><small>Пусто</small></h6> -->\r\n\r\n    <ion-virtual-scroll *ngIf=\"myTracksList && myTracksList.length>0\" [items]=\"myTracksList\">\r\n      <div style=\"height: 70px;\" *virtualItem=\"let item;\">\r\n\r\n          <ion-list>\r\n\r\n            <ion-item lines=\"none\" (click)=\"release(item, myTracksList)\">\r\n              <ion-thumbnail slot=\"start\">\r\n                <img [src]=\"item.imgSrc\" [alt]=\"item.author + ' - ' + item.title\">\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h2>{{ item.author }}</h2>\r\n                <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n              </ion-label>\r\n              <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n              <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n            </ion-item>\r\n\r\n\r\n          </ion-list>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-virtual-scroll>\r\n  </ion-list>\r\n\r\n  <br *ngIf=\"trackData['status']\">\r\n  <br *ngIf=\"trackData['status']\">\r\n\r\n    <div class=\"footer-media-info\" *ngIf=\"trackData['status']\">\r\n      <div class=\"track-duration\" [style.width]=\"(trackData['position'] / this.trackData['duration'] * 100)+'%'\"></div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"icon\" size=\"3\" (click)=\"openModal([{id: 0}])\">\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col class=\"text-center\" (click)=\"openModal([{id: 0}])\">\r\n            <small *ngFor=\"let data of trackData['data']\">\r\n             {{ data.author }}<br />\r\n              <small>{{ data.title }}</small></small>\r\n          </ion-col>\r\n          <ion-col class=\"text-right icon\" size=\"3\" >\r\n            <ion-spinner name=\"crescent\" color=\"secondary\" *ngIf=\"trackData['status']<=1\"></ion-spinner>\r\n            <ion-icon name=\"pause\" *ngIf=\"trackData['status']==2\" (click)=\"pause()\"></ion-icon>\r\n            <ion-icon name=\"play\" *ngIf=\"trackData['status']>2\" (click)=\"play()\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/media/favorites/favorites.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/media/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesModule", function() { return FavoritesModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites.component */ "./src/app/media/favorites/favorites.component.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/media/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FavoritesModule = /** @class */ (function () {
    function FavoritesModule() {
    }
    FavoritesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_autosize__WEBPACK_IMPORTED_MODULE_5__["AutosizeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] }])
            ],
            declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"]]
        })
    ], FavoritesModule);
    return FavoritesModule;
}());



/***/ }),

/***/ "./src/app/media/favorites/favorites.scss":
/*!************************************************!*\
  !*** ./src/app/media/favorites/favorites.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-checkbox {\n  margin-left: 15px; }\n\nion-card {\n  padding-left: 5px; }\n\nion-segment {\n  padding: 10px 15px 0 15px; }\n\n.sc-ion-segment-md-h {\n  padding-top: 0px; }\n\n.footer-media-info {\n  color: #fff;\n  background: #222;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  line-height: 0.8;\n  font-size: 18px;\n  bottom: 0; }\n\n.footer-media-info .icon {\n  font-size: 31px; }\n\n.content-mdeia-list {\n  margin-bottom: 50px; }\n\nion-slides {\n  margin: 25px 0 5px 0; }\n\n.swiper-slide {\n  width: 50%;\n  display: inline-block; }\n\nion-slide img {\n  width: 80%; }\n\n.track-time {\n  font-size: 11px;\n  margin-right: 15px; }\n\nion-item, ion-list-header {\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\nion-list-header {\n  padding-right: 20px;\n  text-transform: none; }\n\nion-list ion-item img {\n  border-radius: 10px; }\n\nion-list {\n  margin-bottom: 15px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.absolute-right {\n  position: absolute;\n  right: 20px;\n  color: red;\n  margin: 10px;\n  z-index: 9999; }\n\n.serach-bar {\n  background: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 9999; }\n\nion-list-header.mb-m10 {\n  margin-bottom: -10px; }\n\nion-list ion-item img {\n  border-radius: 10px; }\n\nion-list {\n  margin-bottom: 15px; }\n\n.track-duration {\n  width: 0%;\n  height: 4px;\n  margin-bottom: -4px;\n  border-top: 1px solid #000;\n  background: #F7CC34; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvZmF2b3JpdGVzL0M6XFxVc2Vyc1xcYW5raW5nXFzQn9GA0L7QtdC60YLRi1xcSW9uaWM0XFxPbmVDbGlja1xcbWVkaWEvc3JjXFxhcHBcXG1lZGlhXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsVUFBUyxFQUNWOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1Ysc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBQ2Q7O0FBR0Q7RUFDRSxpQkFBZ0I7RUFDaEIseUJBQWdCO0VBQWhCLGlCQUFnQjtFQUNoQixTQUFRO0VBQ1IsY0FBYSxFQUNkOztBQUVEO0VBQ0UscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsVUFBUztFQUNULFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsMkJBQTBCO0VBQzFCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL2Zhdm9yaXRlcy9mYXZvcml0ZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5pb24tc2VnbWVudCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDAgMTVweDtcclxufVxyXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4uZm9vdGVyLW1lZGlhLWluZm8ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3R0b206IDA7XHJcbn1cclxuLmZvb3Rlci1tZWRpYS1pbmZvIC5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzFweDtcclxufVxyXG4uY29udGVudC1tZGVpYS1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBtYXJnaW46IDI1cHggMCA1cHggMDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSBpbWcge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi50cmFjay10aW1lIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSwgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24tbGlzdCBpb24taXRlbSBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5tYi01MCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmFic29sdXRlLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuXHJcbi5zZXJhY2gtYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyLm1iLW0xMHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRyYWNrLWR1cmF0aW9uIHtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcclxuICBiYWNrZ3JvdW5kOiAjRjdDQzM0O1xyXG59XHJcbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module.js.map