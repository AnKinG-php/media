(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/media/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/media/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/media/shared/services/api.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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









var NewsComponent = /** @class */ (function () {
    function NewsComponent(events, route, router, apiService, platform, actionSheetController, alertController, storage) {
        this.events = events;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.storage = storage;
        this.slideOpts = {
            zoom: false,
            initialSlide: 1,
            spaceBetween: 0,
            speed: 400
        };
        this.albums = [];
        this.advise = [];
        this.news = [];
        this.popular = [];
        this.playlists = [];
        this.contentShow = true;
        this.radioPlaylists = [];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_7___default.a, 'ru');
        this.slideOpts.spaceBetween = -window.innerWidth + 300;
        this.slideShow = true;
        //Эвент нажатия кнопки Назад
        this.platform.backButton.subscribe(function () {
        });
    }
    NewsComponent.prototype.onResize = function (event) {
        var _this = this;
        this.slideShow = false;
        this.contentShow = false;
        this.slideOpts.spaceBetween = -event.target.innerWidth + 300;
        setTimeout(function () {
            _this.slideShow = true;
            _this.contentShow = true;
        }, 100);
    };
    //Включение трека
    NewsComponent.prototype.release = function (trackData, trackList) {
        var _this = this;
        this.events.publish('release', trackData, trackList);
        this.getTrackDataEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(300).subscribe(function (x) {
            _this.trackData = _this.events.publish('getTrackData')[0];
            _this.track = _this.trackData['track'];
        });
    };
    NewsComponent.prototype.play = function () {
        this.events.publish('play');
    };
    NewsComponent.prototype.pause = function () {
        this.events.publish('pause');
    };
    NewsComponent.prototype.presentActionSheet = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.stopPropagation();
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: [{
                                        text: 'В избранное',
                                        icon: 'heart',
                                        handler: function () {
                                            _this.addToFavorite(item);
                                        }
                                    },
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
                                    }, {
                                        text: 'Отмена',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }]
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
    NewsComponent.prototype.selectAlert = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Выберите плейлист',
                            message: 'Выберите плейлист для добавления трека',
                            inputs: this.radioPlaylists,
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
    //Добавление трека в избранные
    NewsComponent.prototype.addToFavorite = function (item) {
        if (this.apiService.getFavoritesData()[0].myTracks.filter(function (o) { return o.id == item.id; }).length == 0) {
            this.apiService.getFavoritesData()[0].myTracks.push(item);
            this.storage.set('favoritesData', this.apiService.getFavoritesData());
        }
    };
    //Добавление трека в плейлист
    NewsComponent.prototype.pushToPlaylist = function (item, id) {
        if (!this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == id; })[0]['files_detail']) {
            this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == id; })[0]['files_detail'] = [];
        }
        if (this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == id; })[0]['files_detail'].filter(function (o) { return o.id == item.id; }).length == 0) {
            this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == id; })[0]['files_detail'].push(item);
        }
        this.apiService.editPlatlist(id, this.apiService.getFavoritesData()[0].playlists.filter(function (x) { return x.id == id; })[0]);
    };
    NewsComponent.prototype.toHHMMSS = function (unix_timestamp) {
        return this.apiService.toHHMMSS(unix_timestamp);
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackData = this.events.publish('getTrackData')[0];
        // if (!this.apiService.getNewsData()[0].done) {
        //   this.events.publish('presentLoading');
        // }
        var w8 = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(100).subscribe(function (x) {
            if (_this.apiService.getAuth()) {
                if (_this.apiService.getFavoritesData()[0].done) {
                    _this.playlists = _this.apiService.getFavoritesData()[0].playlists;
                    _this.playlists.forEach(function (item) {
                        _this.radioPlaylists.push({ name: item['id'], type: 'radio', label: item['title'], value: item['id'] });
                    });
                }
                if (_this.apiService.getNewsData()[0].done) {
                    _this.albums = _this.apiService.getNewsData()[0].albums;
                    _this.advise = _this.apiService.getNewsData()[0].advise;
                    _this.news = _this.apiService.getNewsData()[0].news;
                    _this.popular = _this.apiService.getNewsData()[0].popular;
                    _this.events.publish('stopLoading');
                    w8.unsubscribe();
                }
            }
        });
    };
    //Запуск модального окна проигрователя
    NewsComponent.prototype.openModal = function () {
        this.events.publish('openModal');
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.events.publish('stopLoading');
        if (this.getTrackDataEvent) {
            this.getTrackDataEvent.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NewsComponent.prototype, "onResize", null);
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.html */ "./src/app/media/news/news.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('FadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(0%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('SlideLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatex(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatex(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatex(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatex(50%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('SlideUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(50%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('SlideRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatex(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translatex(-50%)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./news.scss */ "./src/app/media/news/news.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/media/news/news.html":
/*!**************************************!*\
  !*** ./src/app/media/news/news.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons>\r\n      <ion-row>\r\n        <ion-col class=\"active\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"headset\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n  <h1 class=\"title\">Музыка</h1>\r\n\r\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"slideShow\" [@FadeIn]>\r\n    <ion-slide *ngFor=\"let item of albums\" [routerLink]=\"['/media/news/album/'+item.id]\" routerDirection=\"forward\">\r\n        <img *ngIf=\"item.img\" [src]=\"item.img\" [alt]=\"item.title\">\r\n        <img *ngIf=\"!item.img\" src=\"assets/nope.png\" alt=\"\">\r\n      <h4 class=\"mt-5\">{{ item.artist }}<br /><small>{{ item.title }}</small></h4>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n\r\n  <ion-list class=\"mb-0\">\r\n    <ion-list-header  class=\"mb-0\" [routerLink]=\"['/media/news/list/recommend/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\" >Рекомендуем вам</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n<!--\r\n      <h6 class=\"text-center\" *ngIf=\"advise && advise.length==0\"><small>Пусто</small></h6> -->\r\n\r\n    <ion-item lines=\"none\" (click)=\"release(item, advise)\" *ngFor=\"let item of advise\">\r\n      <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"item.img\" [src]=\"item.img\" [alt]=\"item.title\">\r\n          <img *ngIf=\"!item.img\" src=\"assets/nope.png\" alt=\"\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.artist }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted pl-5\">{{ toHHMMSS(item.duration) }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list class=\"mb-0\">\r\n    <ion-list-header  class=\"mb-0\" [routerLink]=\"['/media/news/list/news/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\">Новинки</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n          <!-- <h6 class=\"text-center\" *ngIf=\"news && news.length==0\"><small>Пусто</small></h6> -->\r\n\r\n    <ion-item lines=\"none\" (click)=\"release(item, news)\" *ngFor=\"let item of news\">\r\n      <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"item.img\" [src]=\"item.img\" [alt]=\"item.title\">\r\n          <img *ngIf=\"!item.img\" src=\"assets/nope.png\" alt=\"\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.artist }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted pl-5\">{{ toHHMMSS(item.duration) }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-list>\r\n    <ion-list-header  class=\"mb-0\" [routerLink]=\"['/media/news/list/popular/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\" >Популярное</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n          <!-- <h6 class=\"text-center\" *ngIf=\"popular && popular.length==0\"><small>Пусто</small></h6> -->\r\n\r\n    <ion-item lines=\"none\" (click)=\"release(item, popular)\" *ngFor=\"let item of popular\">\r\n      <ion-thumbnail slot=\"start\">\r\n          <img *ngIf=\"item.img\" [src]=\"item.img\" [alt]=\"item.title\">\r\n          <img *ngIf=\"!item.img\" src=\"assets/nope.png\" alt=\"\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.artist }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted pl-5\">{{ toHHMMSS(item.duration) }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <br *ngIf=\"trackData['status']\">\r\n  <br *ngIf=\"trackData['status']\">\r\n\r\n\r\n  <div class=\"footer-media-info\" *ngIf=\"trackData['status']\">\r\n    <div class=\"track-duration\" [style.width]=\"(trackData['position'] / this.trackData['duration'] * 100)+'%'\"></div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"icon\" size=\"2\" (click)=\"openModal([{id: 0}])\">\r\n          <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"text-center\" (click)=\"openModal([{id: 0}])\">\r\n          <small *ngFor=\"let data of trackData['data']\">\r\n           {{ data.artist }}<br />\r\n            <small>{{ data.title }}</small></small>\r\n        </ion-col>\r\n        <ion-col class=\"text-right icon\" size=\"2\" >\r\n          <ion-spinner name=\"crescent\" color=\"secondary\" *ngIf=\"trackData['status']<=1\"></ion-spinner>\r\n          <ion-icon name=\"pause\" *ngIf=\"trackData['status']==2\" (click)=\"pause()\"></ion-icon>\r\n          <ion-icon name=\"play\" *ngIf=\"trackData['status']>2\" (click)=\"play()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/media/news/news.module.ts":
/*!*******************************************!*\
  !*** ./src/app/media/news/news.module.ts ***!
  \*******************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.component */ "./src/app/media/news/news.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/media/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] }])
            ],
            declarations: [_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/media/news/news.scss":
/*!**************************************!*\
  !*** ./src/app/media/news/news.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-checkbox {\n  margin-left: 15px; }\n\nion-card {\n  padding-left: 5px; }\n\nion-segment {\n  padding: 10px 15px 0 15px; }\n\n.sc-ion-segment-md-h {\n  padding-top: 0px; }\n\n.footer-media-info {\n  color: #fff;\n  background: #222;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  line-height: 0.8;\n  font-size: 18px;\n  bottom: 0; }\n\n.footer-media-info .icon {\n  font-size: 31px; }\n\n.content-mdeia-list {\n  margin-bottom: 50px; }\n\nion-slides {\n  margin: 25px 0 5px 0; }\n\n.swiper-slide {\n  display: block; }\n\n.track-time {\n  font-size: 11px;\n  margin-right: 15px; }\n\nion-item, ion-list-header {\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\nion-list-header {\n  padding-right: 20px;\n  text-transform: none; }\n\nion-list ion-item img {\n  border-radius: 10px; }\n\nion-list {\n  margin-bottom: 15px; }\n\n.track-duration {\n  width: 0%;\n  height: 4px;\n  margin-bottom: -4px;\n  border-top: 1px solid #000;\n  background: #F7CC34; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvbmV3cy9DOlxcVXNlcnNcXGFua2luZ1xc0J/RgNC+0LXQutGC0YtcXElvbmljNFxcT25lQ2xpY2tcXG1lZGlhL3NyY1xcYXBwXFxtZWRpYVxcbmV3c1xcbmV3cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsVUFBUyxFQUNWOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsVUFBUztFQUNULFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsMkJBQTBCO0VBQzFCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lZGlhL25ld3MvbmV3cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jaGVja2JveCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5pb24tc2VnbWVudCB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDAgMTVweDtcclxufVxyXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4uZm9vdGVyLW1lZGlhLWluZm8ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3R0b206IDA7XHJcbn1cclxuLmZvb3Rlci1tZWRpYS1pbmZvIC5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzFweDtcclxufVxyXG4uY29udGVudC1tZGVpYS1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBtYXJnaW46IDI1cHggMCA1cHggMDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50cmFjay10aW1lIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSwgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24tbGlzdCBpb24taXRlbSBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4udHJhY2stZHVyYXRpb24ge1xyXG4gIHdpZHRoOiAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNGN0NDMzQ7XHJcbn1cclxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map