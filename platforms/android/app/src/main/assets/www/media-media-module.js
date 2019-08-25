(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"],{

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
    }
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.html */ "./src/app/media/media.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('FadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translatey(0%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('Show', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translatey(-50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./media.scss */ "./src/app/media/media.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/media/media.html":
/*!**********************************!*\
  !*** ./src/app/media/media.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-tabs>\r\n    <ion-tab-bar color=\"secondary\">\r\n    <ion-tab-button [routerLink]=\"['/media/news']\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n      <ion-icon name=\"musical-notes\" color=\"primary\"></ion-icon>\r\n      <ion-label>Новинки</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button [routerLink]=\"['/media/favorites']\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n      <ion-icon name=\"heart-empty\" color=\"primary\"></ion-icon>\r\n      <ion-label>Избранные</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button [routerLink]=\"['/media/search']\" routerDirection=\"root\" routerLinkActive=\"active\">\r\n      <ion-icon name=\"search\" color=\"primary\"></ion-icon>\r\n      <ion-label>Поиск</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/media/media.module.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/*! exports provided: MediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media.router.module */ "./src/app/media/media.router.module.ts");
/* harmony import */ var _media_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media.component */ "./src/app/media/media.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MediaModule = /** @class */ (function () {
    function MediaModule() {
    }
    MediaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _media_router_module__WEBPACK_IMPORTED_MODULE_4__["MediaRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: [_media_component__WEBPACK_IMPORTED_MODULE_5__["MediaComponent"]]
        })
    ], MediaModule);
    return MediaModule;
}());



/***/ }),

/***/ "./src/app/media/media.router.module.ts":
/*!**********************************************!*\
  !*** ./src/app/media/media.router.module.ts ***!
  \**********************************************/
/*! exports provided: MediaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRoutingModule", function() { return MediaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media.component */ "./src/app/media/media.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _media_component__WEBPACK_IMPORTED_MODULE_2__["MediaComponent"],
        children: [
            {
                path: 'media',
                children: [
                    {
                        path: '',
                        redirectTo: '/media/news',
                        pathMatch: 'full'
                    },
                    {
                        path: 'news',
                        loadChildren: './news/news.module#NewsModule'
                    },
                    {
                        path: 'favorites',
                        loadChildren: './favorites/favorites.module#FavoritesModule'
                    },
                    {
                        path: 'news/list',
                        children: [
                            {
                                path: '',
                                redirectTo: '/media/news',
                                pathMatch: 'full'
                            },
                            {
                                path: ':id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './list/list.module#ListModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'search/list',
                        children: [
                            {
                                path: '',
                                redirectTo: '/media/news',
                                pathMatch: 'full'
                            },
                            {
                                path: ':id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './list/list.module#ListModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'search/playlist',
                        children: [
                            {
                                path: '',
                                loadChildren: './playlist/playlist.module#PlaylistModule'
                            },
                            {
                                path: ':id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './playlist/playlist.module#PlaylistModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'favorites/playlist',
                        children: [
                            {
                                path: '',
                                loadChildren: './playlist/playlist.module#PlaylistModule'
                            },
                            {
                                path: ':id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './playlist/playlist.module#PlaylistModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'news/album',
                        children: [
                            {
                                path: '',
                                loadChildren: './playlist/playlist.module#PlaylistModule'
                            },
                            {
                                path: ':id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './playlist/playlist.module#PlaylistModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'search',
                        loadChildren: './search/search.module#SearchModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/media/news',
                pathMatch: 'full'
            }
        ]
    }
];
var MediaRoutingModule = /** @class */ (function () {
    function MediaRoutingModule() {
    }
    MediaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MediaRoutingModule);
    return MediaRoutingModule;
}());



/***/ }),

/***/ "./src/app/media/media.scss":
/*!**********************************!*\
  !*** ./src/app/media/media.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  border-radius: 10px; }\n\nion-tab-button.active {\n  background: rgba(0, 0, 0, 0.1); }\n\nion-label {\n  font-size: 13px;\n  margin-bottom: 3px; }\n\nion-tab-bar {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvQzpcXFVzZXJzXFxhbmtpbmdcXDNEIE9iamVjdHNcXElvbmljNFxcT25lQ2xpY2tcXG1lZGlhL3NyY1xcYXBwXFxtZWRpYVxcbWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLCtCQUEyQixFQUM1Qjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEvbWVkaWEuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAuMSk7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG5pb24tdGFiLWJhciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=media-media-module.js.map