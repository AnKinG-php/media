(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/@ionic-native/media/ngx/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic-native/media/ngx/index.js ***!
  \*******************************************************/
/*! exports provided: MediaObject, MEDIA_STATUS, MEDIA_ERROR, Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObject", function() { return MediaObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_STATUS", function() { return MEDIA_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ERROR", function() { return MEDIA_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "successCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "successCallback", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "errorCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "errorCallback", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "statusCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "statusCallback", value); },
        enumerable: true,
        configurable: true
    });
    return MediaObject;
}());

var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    Media.prototype.create = function (src) {
        var instance;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(Media.getPluginRef(), null, Media.getPluginName()) ===
            true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
    Media = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Media);
    return Media;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGdGQUFnRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7O0lBb0MxQyxxQkFBb0IsZUFBb0I7UUFBeEMsaUJBbUJDO1FBbkJtQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxDQUFNLFVBQUMsUUFBdUI7WUFDM0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQzNCLFVBQUMsUUFBK0I7WUFDOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztRQUMvQyxDQUFDLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQ2xDLFVBQUMsUUFBZ0M7WUFDL0IsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztRQUNoRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFPRCx5Q0FBbUI7SUFTbkIsd0NBQWtCO0lBU2xCLGlDQUFXO0lBUVgsMEJBQUksYUFBQyxVQUdKO0lBTUQsMkJBQUs7SUFNTCw2QkFBTztJQU9QLDRCQUFNLGFBQUMsWUFBb0I7SUFPM0IsK0JBQVMsYUFBQyxNQUFjO0lBR3hCLDZCQUFPLGFBQUMsU0FBaUI7SUFNekIsaUNBQVc7SUFNWCxnQ0FBVTtJQU1WLGlDQUFXO0lBTVgsa0NBQVk7SUFNWiwwQkFBSTswQkE5SGdCLHdDQUFlOzs7Ozs7MEJBS2Ysc0NBQWE7Ozs7OzswQkFLYix1Q0FBYzs7Ozs7O3NCQXBDcEM7OztBQXlLQSxNQUFNLENBQU4sSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUix1REFBUSxDQUFBO0lBQ1IscURBQU8sQ0FBQTtJQUNQLG1EQUFNLENBQUE7SUFDTixxREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFlBQVksS0FBWixZQUFZLFFBTXZCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixtREFBVyxDQUFBO0lBQ1gsbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7SUFDTix1REFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCOztJQTZHMEIseUJBQWlCOzs7UUFDMUMsWUFBWTtRQUNaOztXQUVHO1FBQ0gsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZjs7V0FFRztRQUNILG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25COztXQUVHO1FBQ0gsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEI7O1dBRUc7UUFDSCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGNBQWM7UUFDZDs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQjs7V0FFRztRQUNILDhCQUF3QixHQUFHLENBQUMsQ0FBQzs7O0lBRTdCOzs7O09BSUc7SUFDSCxzQkFBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLFFBQWEsQ0FBQztRQUVsQixJQUNFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BFLElBQUksRUFDSjtZQUNBLDZCQUE2QjtZQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUExRFUsS0FBSztRQURqQixVQUFVLEVBQUU7T0FDQSxLQUFLO2dCQW5TbEI7RUFtUzJCLGlCQUFpQjtTQUEvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBjaGVja0F2YWlsYWJpbGl0eSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhT2JqZWN0IHtcbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugb24gYWN0aW9ucyBzdWNjZXNzXG4gICAqL1xuICBvblN1Y2Nlc3M6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIGFuIGVycm9yIG9jY3Vyc1xuICAgKi9cbiAgb25FcnJvcjogT2JzZXJ2YWJsZTxNRURJQV9FUlJPUj47XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUgZmlsZSBzdGF0dXMgY2hhbmdlc1xuICAgKi9cbiAgb25TdGF0dXNVcGRhdGU6IE9ic2VydmFibGU8TUVESUFfU1RBVFVTPjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdWNjZXNzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGVycm9yQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHN0YXR1c0NhbGxiYWNrOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5vblN1Y2Nlc3MgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgdGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9ICgpID0+IHt9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub25FcnJvciA9IG5ldyBPYnNlcnZhYmxlPE1FRElBX0VSUk9SPihcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfRVJST1I+KSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICAgIHJldHVybiAoKSA9PiAodGhpcy5lcnJvckNhbGxiYWNrID0gKCkgPT4ge30pO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLm9uU3RhdHVzVXBkYXRlID0gbmV3IE9ic2VydmFibGU8TUVESUFfU1RBVFVTPihcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfU1RBVFVTPikgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1c0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN0YXR1c0NhbGxiYWNrID0gKCkgPT4ge30pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRDdXJyZW50QW1wbGl0dWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS4gQWxzbyB1cGRhdGVzIHRoZSBNZWRpYSBvYmplY3QncyBwb3NpdGlvbiBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIGFuIGF1ZGlvIGZpbGUgaW4gc2Vjb25kcy4gSWYgdGhlIGR1cmF0aW9uIGlzIHVua25vd24sIGl0IHJldHVybnMgYSB2YWx1ZSBvZiAtMS5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgZHVyYXRpb24gb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3IgcmVzdW1lcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5KGlvc09wdGlvbnM/OiB7XG4gICAgbnVtYmVyT2ZMb29wcz86IG51bWJlcjtcbiAgICBwbGF5QXVkaW9XaGVuU2NyZWVuSXNMb2NrZWQ/OiBib29sZWFuO1xuICB9KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGF1c2UoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZWxlYXNlcyB0aGUgdW5kZXJseWluZyBvcGVyYXRpbmcgc3lzdGVtJ3MgYXVkaW8gcmVzb3VyY2VzLiBUaGlzIGlzIHBhcnRpY3VsYXJseSBpbXBvcnRhbnQgZm9yIEFuZHJvaWQsIHNpbmNlIHRoZXJlIGFyZSBhIGZpbml0ZSBhbW91bnQgb2YgT3BlbkNvcmUgaW5zdGFuY2VzIGZvciBtZWRpYSBwbGF5YmFjay4gQXBwbGljYXRpb25zIHNob3VsZCBjYWxsIHRoZSByZWxlYXNlIGZ1bmN0aW9uIGZvciBhbnkgTWVkaWEgcmVzb3VyY2UgdGhhdCBpcyBubyBsb25nZXIgbmVlZGVkLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVsZWFzZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgVGhlIHRpbWUgcG9zaXRpb24geW91IHdhbnQgdG8gc2V0IGZvciB0aGUgY3VycmVudCBhdWRpbyBmaWxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZWVrVG8obWlsbGlzZWNvbmRzOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdm9sdW1lIGZvciBhbiBhdWRpbyBmaWxlLlxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IFRoZSB2b2x1bWUgdG8gc2V0IGZvciBwbGF5YmFjay4gVGhlIHZhbHVlIG11c3QgYmUgd2l0aGluIHRoZSByYW5nZSBvZiAwLjAgdG8gMS4wLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJhdGUoc3BlZWRSYXRlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyByZWNvcmRpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHN0YXJ0UmVjb3JkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzdG9wUmVjb3JkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGF1c2VSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXN1bWVzIHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVzdW1lUmVjb3JkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcCgpOiB2b2lkIHt9XG59XG5cbmV4cG9ydCB0eXBlIE1lZGlhU3RhdHVzVXBkYXRlQ2FsbGJhY2sgPSAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRXJyb3Ige1xuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFcnJvciBjb2RlXG4gICAqL1xuICBjb2RlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIE1FRElBX1NUQVRVUyB7XG4gIE5PTkUgPSAwLFxuICBTVEFSVElORyxcbiAgUlVOTklORyxcbiAgUEFVU0VELFxuICBTVE9QUEVEXG59XG5cbmV4cG9ydCBlbnVtIE1FRElBX0VSUk9SIHtcbiAgQUJPUlRFRCA9IDEsXG4gIE5FVFdPUkssXG4gIERFQ09ERSxcbiAgU1VQUE9SVEVEXG59XG5cbmV4cG9ydCB0eXBlIE1lZGlhRXJyb3JDYWxsYmFjayA9IChlcnJvcjogTWVkaWFFcnJvcikgPT4gdm9pZDtcblxuLyoqXG4gKiBAbmFtZSBNZWRpYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byByZWNvcmQgYW5kIHBsYXkgYmFjayBhdWRpbyBmaWxlcyBvbiBhIGRldmljZS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhLCBNZWRpYU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYTogTWVkaWEpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gQ3JlYXRlIGEgTWVkaWEgaW5zdGFuY2UuICBFeHBlY3RzIHBhdGggdG8gZmlsZSBvciB1cmwgYXMgYXJndW1lbnRcbiAqIC8vIFdlIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBzZWNvbmQgYXJndW1lbnQgdG8gdHJhY2sgdGhlIHN0YXR1cyBvZiB0aGUgbWVkaWFcbiAqXG4gKiBjb25zdCBmaWxlOiBNZWRpYU9iamVjdCA9IHRoaXMubWVkaWEuY3JlYXRlKCdmaWxlLm1wMycpO1xuICpcbiAqIC8vIHRvIGxpc3RlbiB0byBwbHVnaW4gZXZlbnRzOlxuICpcbiAqIGZpbGUub25TdGF0dXNVcGRhdGUuc3Vic2NyaWJlKHN0YXR1cyA9PiBjb25zb2xlLmxvZyhzdGF0dXMpKTsgLy8gZmlyZXMgd2hlbiBmaWxlIHN0YXR1cyBjaGFuZ2VzXG4gKlxuICogZmlsZS5vblN1Y2Nlc3Muc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdBY3Rpb24gaXMgc3VjY2Vzc2Z1bCcpKTtcbiAqXG4gKiBmaWxlLm9uRXJyb3Iuc3Vic2NyaWJlKGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciEnLCBlcnJvcikpO1xuICpcbiAqIC8vIHBsYXkgdGhlIGZpbGVcbiAqIGZpbGUucGxheSgpO1xuICpcbiAqIC8vIHBhdXNlIHRoZSBmaWxlXG4gKiBmaWxlLnBhdXNlKCk7XG4gKlxuICogLy8gZ2V0IGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb25cbiAqIGZpbGUuZ2V0Q3VycmVudFBvc2l0aW9uKCkudGhlbigocG9zaXRpb24pID0+IHtcbiAqICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICogfSk7XG4gKlxuICogLy8gZ2V0IGZpbGUgZHVyYXRpb25cbiAqIGxldCBkdXJhdGlvbiA9IGZpbGUuZ2V0RHVyYXRpb24oKTtcbiAqIGNvbnNvbGUubG9nKGR1cmF0aW9uKTtcbiAqXG4gKiAvLyBza2lwIHRvIDEwIHNlY29uZHMgKGV4cGVjdHMgaW50IHZhbHVlIGluIG1zKVxuICogZmlsZS5zZWVrVG8oMTAwMDApO1xuICpcbiAqIC8vIHN0b3AgcGxheWluZyB0aGUgZmlsZVxuICogZmlsZS5zdG9wKCk7XG4gKlxuICogLy8gcmVsZWFzZSB0aGUgbmF0aXZlIGF1ZGlvIHJlc291cmNlXG4gKiAvLyBQbGF0Zm9ybSBRdWlya3M6XG4gKiAvLyBpT1Mgc2ltcGx5IGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBhbmQgdGhlIG9sZCBvbmUgd2lsbCBiZSBvdmVyd3JpdHRlblxuICogLy8gQW5kcm9pZCB5b3UgbXVzdCBjYWxsIHJlbGVhc2UoKSB0byBkZXN0cm95IGluc3RhbmNlcyBvZiBtZWRpYSB3aGVuIHlvdSBhcmUgZG9uZVxuICogZmlsZS5yZWxlYXNlKCk7XG4gKlxuICpcbiAqXG4gKiAvLyBSZWNvcmRpbmcgdG8gYSBmaWxlXG4gKiBjb25zdCBmaWxlOiBNZWRpYU9iamVjdCA9IHRoaXMubWVkaWEuY3JlYXRlKCdwYXRoL3RvL2ZpbGUubXAzJyk7XG4gKlxuICogZmlsZS5zdGFydFJlY29yZCgpO1xuICpcbiAqIGZpbGUuc3RvcFJlY29yZCgpO1xuICpcbiAqXG4gKiBgYGBcbiAqXG4gKiBTb21lIGhpbnRzIGlmIHlvdSBhcmUgdXNpbmcgaU9TIGFuZCByZWNvcmRpbmcgZG9lc24ndCB3b3JrOlxuICogMS4pIFRyeSB0byB1c2UgYSBhYnNvbHV0ZSBmaWxlIHBhdGggYnV0IHJlbW92ZSBiZWdpbm5pbmcgXCJmaWxlOi8vXCIuXG4gKiBUaGVuIGl0IGxvb2tzIGxpa2U6IGAvdmFyL21vYmlsZS9Db250YWluZXJzL0RhdGEvQXBwbGljYXRpb24vQUY0MzhCOEItNzcyNC00RkJCLThFNjktMDgzNDYzMjI0RkM0L3RtcC9teV9maWxlLm00YWBcbiAqIEV4YW1wbGU6IGB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKWBcbiAqIDIuKSBJZiB0aGF0J3Mgbm90IHdvcmtpbmcsIHRvbywgY3JlYXRlIHRoZSBmaWxlIGJlZm9yZSB1c2luZy5cbiAqIEV4YW1wbGU6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNZWRpYSwgTWVkaWFPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhL25neCc7XG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlL25neCc7XG4gKlxuICogLi4uXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYTogTWVkaWEsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlLmNyZWF0ZUZpbGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnksICdteV9maWxlLm00YScsIHRydWUpLnRoZW4oKCkgPT4ge1xuICogICBsZXQgZmlsZSA9IHRoaXMubWVkaWEuY3JlYXRlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LnJlcGxhY2UoL15maWxlOlxcL1xcLy8sICcnKSArICdteV9maWxlLm00YScpO1xuICogICBmaWxlLnN0YXJ0UmVjb3JkKCk7XG4gKiAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGZpbGUuc3RvcFJlY29yZCgpLCAxMDAwMCk7XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gZmluZCB0aGUgcmVhc29ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1uYXRpdmUvaXNzdWVzLzE0NTIjaXNzdWVjb21tZW50LTI5OTYwNTkwNlxuICogQGNsYXNzZXNcbiAqIE1lZGlhT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogTWVkaWFFcnJvclxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01lZGlhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbWVkaWEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tZWRpYScsXG4gIHBsdWdpblJlZjogJ01lZGlhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvLyBDb25zdGFudHNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX05PTkUgPSAwO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RBUlRJTkcgPSAxO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfUlVOTklORyA9IDI7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9QQVVTRUQgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RPUFBFRCA9IDQ7XG5cbiAgLy8gZXJyb3IgY29kZXNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9BQk9SVEVEID0gMTtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ERUNPREUgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX05PTkVfU1VQUE9SVEVEID0gNDtcblxuICAvKipcbiAgICogT3BlbiBhIG1lZGlhIGZpbGVcbiAgICogQHBhcmFtIHNyYyB7c3RyaW5nfSBBIFVSSSBjb250YWluaW5nIHRoZSBhdWRpbyBjb250ZW50LlxuICAgKiBAcmV0dXJuIHtNZWRpYU9iamVjdH1cbiAgICovXG4gIGNyZWF0ZShzcmM6IHN0cmluZyk6IE1lZGlhT2JqZWN0IHtcbiAgICBsZXQgaW5zdGFuY2U6IGFueTtcblxuICAgIGlmIChcbiAgICAgIGNoZWNrQXZhaWxhYmlsaXR5KE1lZGlhLmdldFBsdWdpblJlZigpLCBudWxsLCBNZWRpYS5nZXRQbHVnaW5OYW1lKCkpID09PVxuICAgICAgdHJ1ZVxuICAgICkge1xuICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBtZWRpYSBvYmplY3RcbiAgICAgIGluc3RhbmNlID0gbmV3IChNZWRpYS5nZXRQbHVnaW4oKSkoc3JjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1lZGlhT2JqZWN0KGluc3RhbmNlKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/@ionic-native/native-audio/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/native-audio/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: NativeAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAudio", function() { return NativeAudio; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NativeAudio = /** @class */ (function (_super) {
    __extends(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
    NativeAudio = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NativeAudio);
    return NativeAudio;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1hdWRpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3ZDLCtCQUFpQjs7OztJQVFoRCxtQ0FBYSxhQUFDLEVBQVUsRUFBRSxTQUFpQjtJQWMzQyxvQ0FBYyxhQUFDLEVBQVUsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtJQWMzRiwwQkFBSSxhQUFDLEVBQVUsRUFBRSxnQkFBMkI7SUFVNUMsMEJBQUksYUFBQyxFQUFVO0lBVWYsMEJBQUksYUFBQyxFQUFVO0lBVWYsNEJBQU0sYUFBQyxFQUFVO0lBV2pCLDhDQUF3QixhQUFDLEVBQVUsRUFBRSxNQUFjOzs7Ozs7SUE3RXhDLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkF2Q3hCO0VBdUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBOYXRpdmUgQXVkaW9cbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgQXVkaW8gUGxheWJhY2tcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlQXVkaW8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1hdWRpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlQXVkaW86IE5hdGl2ZUF1ZGlvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRTaW1wbGUoJ3VuaXF1ZUlkMScsICdwYXRoL3RvL2ZpbGUubXAzJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkQ29tcGxleCgndW5pcXVlSWQyJywgJ3BhdGgvdG8vZmlsZTIubXAzJywgMSwgMSwgMCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIC8vIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBkb25lIHBsYXlpbmdcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJywgKCkgPT4gY29uc29sZS5sb2coJ3VuaXF1ZUlkMSBpcyBkb25lIHBsYXlpbmcnKSk7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5sb29wKCd1bmlxdWVJZDInKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoJ3VuaXF1ZUlkMicsIDAuNikudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zdG9wKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnVubG9hZCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlQXVkaW8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuTmF0aXZlQXVkaW8nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWF1ZGlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXRpdmVBdWRpbyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3Igc2hvcnQgY2xpcHMgLyBzaW5nbGUgc2hvdHMgKHVwIHRvIGZpdmUgc2Vjb25kcykuIENhbm5vdCBiZSBzdG9wcGVkIC8gbG9vcGVkLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlbG9hZFNpbXBsZShpZDogc3RyaW5nLCBhc3NldFBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3IgYmFja2dyb3VuZCBtdXNpYyAvIGFtYmllbnQgc291bmQuIFVzZXMgaGlnaGxldmVsIG5hdGl2ZSBBUElzIHdpdGggYSBsYXJnZXIgZm9vdHByaW50LiAoaU9TOiBBVkF1ZGlvUGxheWVyKS4gQ2FuIGJlIHN0b3BwZWQgLyBsb29wZWQgYW5kIHVzZWQgd2l0aCBtdWx0aXBsZSB2b2ljZXMuIENhbiBiZSBmYWRlZCBpbiBhbmQgb3V0IHVzaW5nIHRoZSBkZWxheSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxuICAgKiBAcGFyYW0gdm9sdW1lIHtudW1iZXJ9IHRoZSB2b2x1bWUgb2YgdGhlIHByZWxvYWRlZCBzb3VuZCAoMC4xIHRvIDEuMClcbiAgICogQHBhcmFtIHZvaWNlcyB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIG11bHRpY2hhbm5lbCB2b2ljZXMgYXZhaWxhYmxlXG4gICAqIEBwYXJhbSBkZWxheSB7bnVtYmVyfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmVsb2FkQ29tcGxleChpZDogc3RyaW5nLCBhc3NldFBhdGg6IHN0cmluZywgdm9sdW1lOiBudW1iZXIsIHZvaWNlczogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGxheXMgYW4gYXVkaW8gYXNzZXRcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGNvbXBsZXRlQ2FsbGJhY2sge0Z1bmN0aW9ufSBvcHRpb25hbC4gQ2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aGVuIGF1ZGlvIGlzIGRvbmUgcGxheWluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHBsYXkoaWQ6IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcGxheWluZyBhbiBhdWRpb1xuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wcyBhbiBhdWRpbyBhc3NldCBpbmZpbml0ZWx5LCB0aGlzIG9ubHkgd29ya3MgZm9yIGNvbXBsZXggYXNzZXRzXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9vcChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5sb2FkcyBhbiBhdWRpbyBmaWxlIGZyb20gbWVtb3J5XG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVubG9hZChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgdm9sdW1lIGZvciBwcmVsb2FkZWQgY29tcGxleCBhc3NldHMuXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gdGhlIHZvbHVtZSBvZiB0aGUgYXVkaW8gYXNzZXQgKDAuMSB0byAxLjApXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFZvbHVtZUZvckNvbXBsZXhBc3NldChpZDogc3RyaW5nLCB2b2x1bWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

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
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/media/shared/services/api.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/ru */ "./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function NewsComponent(events, route, router, apiService, platform, media, nativeAudio, actionSheetController, storage) {
        this.events = events;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.platform = platform;
        this.media = media;
        this.nativeAudio = nativeAudio;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.slideOpts = {
            zoom: false,
            initialSlide: 1,
            spaceBetween: -65,
            speed: 400
        };
        this.slides = [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }];
        this.advise = [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }];
        this.news = [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }];
        this.popular = [{ id: 1, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }, { id: 2, author: 'Armin van Buuren', title: 'Imagine (The remixes)', time: '04:49', imgSrc: 'assets/Rectangle 4.png' }];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_9___default.a, 'ru');
        //Эвент нажатия кнопки Назад
        this.platform.backButton.subscribe(function () {
        });
    }
    NewsComponent.prototype.play = function (trackData) {
        this.trackData = trackData;
        var file = this.media.create('C:/Users/anking/3D Objects/Ionic4/OneClick/media/src/assets/music.mp3');
        file.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
        file.onSuccess.subscribe(function () { return console.log('Action is successful'); });
        file.onError.subscribe(function (error) { return console.log('Error!', error); });
        // play the file
        file.play();
        // get current playback position
        file.getCurrentPosition().then(function (position) {
            console.log(position);
        });
        // get file duration
        var duration = file.getDuration();
        console.log(duration);
        this.nativeAudio.preloadSimple('uniqueId1', 'C:/Users/anking/3D Objects/Ionic4/OneClick/media/src/assets/music.mp3');
        this.nativeAudio.play('uniqueId1');
        // can optionally pass a callback to be called when the file is done playing
        this.nativeAudio.play('uniqueId1', function () { return console.log('uniqueId1 is done playing'); });
    };
    NewsComponent.prototype.onSuccess = function () {
        console.log(1);
    };
    NewsComponent.prototype.onError = function () {
        console.log(2);
    };
    NewsComponent.prototype.presentActionSheet = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
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
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.publish('stopLoading');
        var w8 = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(100).subscribe(function (x) {
            if (_this.apiService.getAuth()) {
                w8.unsubscribe();
            }
        });
    };
    //Запуск модального окна проигрователя
    NewsComponent.prototype.openModal = function (data) {
        this.events.publish('openModal', data);
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.events.publish('stopLoading');
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.html */ "./src/app/media/news/news.html"),
            providers: [_ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_3__["Media"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeAudio"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('FadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatey(0%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('SlideLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatex(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatex(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatex(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatex(50%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('SlideUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatey(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatey(50%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('SlideRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatey(50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatey(0%)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatex(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'translatex(-50%)', opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./news.scss */ "./src/app/media/news/news.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_3__["Media"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeAudio"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
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

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons>\r\n      <ion-row>\r\n        <ion-col class=\"active\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"headset\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"bookmarks\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"mail\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n  <h1 class=\"title\">Музыка</h1>\r\n\r\n  <ion-slides [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let item of slides\" [routerLink]=\"['/media/news/album/'+item.id]\" routerDirection=\"forward\">\r\n      <img [src]=\"item.imgSrc\" alt=\"\">\r\n      <h4 class=\"mt-5\">{{ item.author }}<br /><small>{{ item.title }}</small></h4>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n\r\n  <ion-list class=\"mb-0\">\r\n    <ion-list-header  class=\"mb-0\" [routerLink]=\"['/media/news/list/recommend/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\" >Рекомендуем вам</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n    <ion-item lines=\"none\" (click)=\"play(item)\" *ngFor=\"let item of advise\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.author }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list class=\"mb-0\">\r\n    <ion-list-header  class=\"mb-0\" [routerLink]=\"['/media/news/list/news/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\" >Новинки</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n    <ion-item lines=\"none\" (click)=\"play(item)\" *ngFor=\"let item of news\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.author }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-list>\r\n    <ion-list-header  class=\"mb-0\" [routerLink]=\"['/media/news/list/popular/']\" routerDirection=\"forward\">\r\n      <h4 class=\"strong\" >Популярное</h4>\r\n      <h3>\r\n        <ion-icon name=\"arrow-forward\"></ion-icon>\r\n      </h3>\r\n    </ion-list-header>\r\n\r\n    <ion-item lines=\"none\" (click)=\"play(item)\" *ngFor=\"let item of popular\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"item.imgSrc\" [alt]=\"item.title\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item.author }}</h2>\r\n        <h3 class=\"text-muted\">{{ item.title }}</h3>\r\n      </ion-label>\r\n      <p class=\"track-time text-muted\">{{ item.time }}</p>\r\n      <ion-icon name=\"more\" (click)=\"presentActionSheet(item)\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <br *ngIf=\"trackData\">\r\n  <br *ngIf=\"trackData\">\r\n\r\n  <div class=\"footer-media-info\" *ngIf=\"trackData\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"icon\" size=\"3\">\r\n          <ion-icon name=\"arrow-dropup\" (click)=\"openModal([{id: 0}])\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col class=\"text-center\">\r\n          <small>Prodigy<br /><small>Smack my bitch up</small></small>\r\n        </ion-col>\r\n        <ion-col class=\"text-right icon\" size=\"3\">\r\n          <ion-icon name=\"pause\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

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

module.exports = "ion-checkbox {\n  margin-left: 15px; }\n\nion-card {\n  padding-left: 5px; }\n\nion-segment {\n  padding: 10px 15px 0 15px; }\n\n.sc-ion-segment-md-h {\n  padding-top: 0px; }\n\n.footer-media-info {\n  color: #fff;\n  background: #000;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  line-height: 0.8;\n  font-size: 18px;\n  bottom: 0; }\n\n.footer-media-info .icon {\n  font-size: 31px; }\n\n.content-mdeia-list {\n  margin-bottom: 50px; }\n\nion-slides {\n  margin: 25px 0 5px 0; }\n\n.swiper-slide {\n  display: block; }\n\n.track-time {\n  font-size: 11px;\n  margin-right: 15px; }\n\nion-item, ion-list-header {\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\nion-list-header {\n  padding-right: 20px;\n  text-transform: none; }\n\nion-list ion-item img {\n  border-radius: 10px; }\n\nion-list {\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvbmV3cy9DOlxcVXNlcnNcXGFua2luZ1xcM0QgT2JqZWN0c1xcSW9uaWM0XFxPbmVDbGlja1xcbWVkaWEvc3JjXFxhcHBcXG1lZGlhXFxuZXdzXFxuZXdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLG9CQUFtQjtFQUNuQixxQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS9uZXdzL25ld3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY2hlY2tib3gge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuaW9uLXNlZ21lbnQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAwIDE1cHg7XHJcbn1cclxuLnNjLWlvbi1zZWdtZW50LW1kLWgge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLmZvb3Rlci1tZWRpYS1pbmZvIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDAuODtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5mb290ZXItbWVkaWEtaW5mbyAuaWNvbntcclxuICBmb250LXNpemU6IDMxcHg7XHJcbn1cclxuLmNvbnRlbnQtbWRlaWEtbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgbWFyZ2luOiAyNXB4IDAgNXB4IDA7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udHJhY2stdGltZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWl0ZW0sIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1saXN0LWhlYWRlciB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuaW9uLWxpc3QgaW9uLWl0ZW0gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */"

/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map