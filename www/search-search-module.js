(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/media/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/media/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
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









var SearchComponent = /** @class */ (function () {
    function SearchComponent(events, route, router, apiService, platform, actionSheetController, alertController, storage) {
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
            initialSlide: 0,
            spaceBetween: -25,
            slidesPerView: 2,
            slidesPerColumnFill: 'row',
            speed: 400
        };
        this.playlists = [];
        this.searchList = [];
        this.news = [];
        this.popular = [];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_7___default.a, 'ru');
        this.slideOpts.spaceBetween = -window.innerWidth / 12;
        this.slideShow = true;
        //Эвент нажатия кнопки Назад
        this.platform.backButton.subscribe(function () {
        });
    }
    SearchComponent.prototype.onResize = function (event) {
        var _this = this;
        this.slideShow = false;
        this.slideOpts.spaceBetween = -event.target.innerWidth / 12;
        setInterval(function () {
            _this.slideShow = true;
        }, 100);
    };
    //Поиск треков и плейлистов на сервере
    SearchComponent.prototype.onSearch = function (event) {
        var search = event.target.value.toLowerCase();
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
    };
    //Включение трека
    SearchComponent.prototype.release = function (trackData, trackList) {
        var _this = this;
        this.events.publish('release', trackData, trackList);
        this.getTrackDataEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(300).subscribe(function (x) {
            _this.trackData = _this.events.publish('getTrackData')[0];
            _this.track = _this.trackData['track'];
        });
    };
    SearchComponent.prototype.play = function () {
        this.events.publish('play');
    };
    SearchComponent.prototype.pause = function () {
        this.events.publish('pause');
    };
    SearchComponent.prototype.toggleSearchbar = function (type) {
        this.searchList = [];
        this.playlists = [];
        this.filterSearch = false;
        if (this.virtualScroll) {
            this.virtualScroll.checkRange(0);
        }
    };
    SearchComponent.prototype.presentActionSheet = function (item) {
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
    SearchComponent.prototype.selectAlert = function (item) {
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
    //Добавление терка в плейлист
    SearchComponent.prototype.pushToPlaylist = function (item, id) {
        this.playlists.filter(function (x) { return x.id == id; })[0].files.push({ id: item.id, author: item.author, title: item.title, time: item.time, imgSrc: item.imgSrc, src: item.src });
        this.apiService.editPlatlist(id, this.playlists.filter(function (x) { return x.id == id; }))
            .subscribe(function (Response) {
            console.log(Response);
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackData = this.events.publish('getTrackData')[0];
        var w8 = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(100).subscribe(function (x) {
            if (_this.apiService.getAuth()) {
                if (_this.apiService.getFavoritesData()[0].done) {
                    _this.playlists = _this.apiService.getFavoritesData()[0].playlists;
                }
                if (_this.apiService.getNewsData()[0].done) {
                    _this.news = _this.apiService.getNewsData()[0].news;
                    _this.popular = _this.apiService.getNewsData()[0].popular;
                    _this.events.publish('stopLoading');
                    w8.unsubscribe();
                }
            }
        });
    };
    //Запуск модального окна проигрователя
    SearchComponent.prototype.openModal = function (data) {
        this.events.publish('openModal', data);
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.events.publish('stopLoading');
        if (this.getTrackDataEvent) {
            this.getTrackDataEvent.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"])
    ], SearchComponent.prototype, "searchbar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], SearchComponent.prototype, "infiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"])
    ], SearchComponent.prototype, "virtualScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SearchComponent.prototype, "onResize", null);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.html */ "./src/app/media/search/search.html"),
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
            styles: [__webpack_require__(/*! ./search.scss */ "./src/app/media/search/search.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/media/search/search.html":
/*!******************************************!*\
  !*** ./src/app/media/search/search.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n<ion-buttons>\r\n    <ion-row>\r\n        <ion-col class=\"active\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"headset\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n</ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n  <h1 class=\"title\">Поиск</h1>\r\n\r\n  <div class=\"serach-bar\">\r\n    <ion-searchbar #searchbar debounce=\"500\" [@FadeIn] placeholder=\"Что вы ищите?\" clearIcon showCancelButton=\"always\" cancelButtonText=\"Закрыть\" (ionInput)=\"onSearch($event)\" (ionCancel)=\"toggleSearchbar(false)\" (keyup.enter)=\"toggleSearchbar(false)\"></ion-searchbar>\r\n  </div>\r\n\r\n\r\n  <h1 class=\"title\" *ngIf=\"filterSearch\">Плейлисты\r\n<ion-badge color=\"white\">1</ion-badge></h1>\r\n\r\n<ion-slides #slide [options]=\"slideOpts\" approxItemHeight=\"50\" *ngIf=\"filterSearch && slideShow\" [@FadeIn]>\r\n    <ion-slide *ngFor=\"let item of playlists\" [routerLink]=\"['/media/search/playlist/'+item.id]\" routerDirection=\"forward\">\r\n      <img [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n      <h6 class=\"mt-5\" *ngIf=\"item.author\">{{ item.author }}<br /><small class=\"small text-muted\">{{ item.title }}</small></h6>\r\n      <h6 class=\"mt-5\" *ngIf=\"!item.author\">{{ item.title }}<br /><small class=\"small text-muted\">{{ item.tracks.length }} треков</small></h6>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-list *ngIf=\"filterSearch\">\r\n      <ion-list-header class=\"mb-0\">\r\n        <h4 class=\"strong\">Найдено</h4>\r\n      </ion-list-header>\r\n\r\n      <h6 class=\"text-center\" *ngIf=\"filterSearch && searchList && searchList.length==0\"><small>Пусто</small></h6>\r\n\r\n    <ion-virtual-scroll *ngIf=\"searchList.length>0\" [items]=\"searchList\" >\r\n      <div style=\"height: 70px;\" *virtualItem=\"let item;\">\r\n\r\n          <ion-list>\r\n\r\n            <ion-item lines=\"none\" (click)=\"release(item, searchList)\">\r\n              <ion-thumbnail slot=\"start\">\r\n                <img [src]=\"item.imgSrc\" [alt]=\"item.author + ' - ' + item.title\">\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h2>{{ item.author }}</h2>\r\n                <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n              </ion-label>\r\n              <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n              <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n            </ion-item>\r\n\r\n\r\n          </ion-list>\r\n\r\n\r\n      </div>\r\n\r\n    </ion-virtual-scroll>\r\n</ion-list>\r\n\r\n  <ion-list *ngIf=\"!filterSearch\" class=\"mb-0\">\r\n    <ion-list-header class=\"mb-0\" [routerLink]=\"['/media/search/list/news/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\">Новинки</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n    <ion-item lines=\"none\" (click)=\"release(item, news)\" *ngFor=\"let item of news\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.author }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-list *ngIf=\"!filterSearch\" class=\"mb-0\">\r\n    <ion-list-header class=\"mb-0\" [routerLink]=\"['/media/search/list/popular/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\">Популярное</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n    <ion-item lines=\"none\" (click)=\"release(item, popular)\" *ngFor=\"let item of popular\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.author }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <br *ngIf=\"trackData['status']\">\r\n  <br *ngIf=\"trackData['status']\">\r\n\r\n\r\n  <div class=\"footer-media-info\" *ngIf=\"trackData['status']\">\r\n    <div class=\"track-duration\" [style.width]=\"(trackData['position'] / this.trackData['duration'] * 100)+'%'\"></div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"icon\" size=\"3\" (click)=\"openModal([{id: 0}])\">\r\n          <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"text-center\" (click)=\"openModal([{id: 0}])\">\r\n          <small *ngFor=\"let data of trackData['data']\">\r\n           {{ data.author }}<br />\r\n            <small>{{ data.title }}</small></small>\r\n        </ion-col>\r\n        <ion-col class=\"text-right icon\" size=\"3\" >\r\n          <ion-spinner name=\"crescent\" color=\"secondary\" *ngIf=\"trackData['status']<=1\"></ion-spinner>\r\n          <ion-icon name=\"pause\" *ngIf=\"trackData['status']==2\" (click)=\"pause()\"></ion-icon>\r\n          <ion-icon name=\"play\" *ngIf=\"trackData['status']>2\" (click)=\"play()\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/media/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/media/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.component */ "./src/app/media/search/search.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/media/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] }])
            ],
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/media/search/search.scss":
/*!******************************************!*\
  !*** ./src/app/media/search/search.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-checkbox {\n  margin-left: 15px; }\n\nion-card {\n  padding-left: 5px; }\n\nion-segment {\n  padding: 10px 15px 0 15px; }\n\n.sc-ion-segment-md-h {\n  padding-top: 0px; }\n\n.footer-media-info {\n  color: #fff;\n  background: #222;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  line-height: 0.8;\n  font-size: 18px;\n  bottom: 0; }\n\n.footer-media-info .icon {\n  font-size: 31px; }\n\n.content-mdeia-list {\n  margin-bottom: 50px; }\n\nion-slides {\n  margin: 25px 0 5px 0; }\n\n.swiper-slide {\n  width: 50%;\n  display: inline-block; }\n\nion-slide img {\n  width: 80%; }\n\n.track-time {\n  font-size: 11px;\n  margin-right: 15px; }\n\nion-item, ion-list-header {\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\nion-list-header {\n  padding-right: 20px;\n  text-transform: none; }\n\nion-list ion-item img {\n  border-radius: 10px; }\n\nion-list {\n  margin-bottom: 15px; }\n\nion-badge {\n  padding-left: 0; }\n\n.serach-bar {\n  background: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 9999; }\n\n.track-duration {\n  width: 0%;\n  height: 4px;\n  margin-bottom: -4px;\n  border-top: 1px solid #000;\n  background: #F7CC34; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvc2VhcmNoL0M6XFxVc2Vyc1xcYW5raW5nXFzQn9GA0L7QtdC60YLRi1xcSW9uaWM0XFxPbmVDbGlja1xcbWVkaWEvc3JjXFxhcHBcXG1lZGlhXFxzZWFyY2hcXHNlYXJjaC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsVUFBUyxFQUNWOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1Ysc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUdEO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsU0FBUTtFQUNSLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFVBQVM7RUFDVCxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLDJCQUEwQjtFQUMxQixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS9zZWFyY2gvc2VhcmNoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNoZWNrYm94IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHggMCAxNXB4O1xyXG59XHJcbi5zYy1pb24tc2VnbWVudC1tZC1oIHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcbi5mb290ZXItbWVkaWEtaW5mbyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogIzIyMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4uZm9vdGVyLW1lZGlhLWluZm8gLmljb257XHJcbiAgZm9udC1zaXplOiAzMXB4O1xyXG59XHJcbi5jb250ZW50LW1kZWlhLWxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIG1hcmdpbjogMjVweCAwIDVweCAwO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW9uLXNsaWRlIGltZyB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuXHJcbi50cmFjay10aW1lIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSwgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWxpc3QtaGVhZGVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5pb24tbGlzdCBpb24taXRlbSBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5pb24tYmFkZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnNlcmFjaC1iYXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDBweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4udHJhY2stZHVyYXRpb24ge1xyXG4gIHdpZHRoOiAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJhY2tncm91bmQ6ICNGN0NDMzQ7XHJcbn1cclxuIl19 */"

/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map