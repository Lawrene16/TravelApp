(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tripdetails-tripdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tripdetails/tripdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tripdetails/tripdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons style=\"margin-left: 5px\" slot=\"start\">\n          <ion-back-button color=\"primary\" defaultHref=\"/profile\"></ion-back-button>\n        </ion-buttons>\n\n    <ion-title>\n      {{data.eventTitle}}\n      <!-- <ion-icon name=\"create\"></ion-icon> -->\n    </ion-title>\n\n    <ion-buttons style=\"margin-left: 5px\" slot=\"end\">\n        <ion-button (click)=\"shareTrip()\" color=\"primary\" >\n          <ion-icon color=\"primary\" name=\"share\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 300px;\">\n    <img height=\"100%\" src=\"{{data.photo}}\" >\n  </div>\n\n<ion-item>\n    <!-- <img height=\"20px\" src=\"../../assets/id-card (1).svg\"> -->\n    <ion-label style=\"margin-left: 16px\">\n        {{data.city}}, {{data.province}}\n\n        <!-- <span style=\"font-size: 18px; font-weight: 600\">ID - </span> 33  -->\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n      <!-- <img height=\"20px\" src=\"../../assets/edit.svg\"> -->\n      <ion-label style=\"margin-left: 16px\">\n        {{data.fromDate}} - {{data.toDate}}\n          <!-- <span style=\"font-size: 18px; font-weight: 600\">Created At - </span> 33  -->\n      </ion-label>\n    </ion-item>\n\n  <ion-item>\n      <!-- <img height=\"20px\" src=\"../../assets/refresh.svg\"> -->\n      <ion-label style=\"margin-left: 16px\">\n          {{data.aboutTrip}}\n\n          <!-- <span style=\"font-size: 18px; font-weight: 600\">Updated At - </span> 33  -->\n      </ion-label>\n    </ion-item>\n\n\n\n\n  <br>\n\n  <br>\n<!-- \n  <p align=\"center\"><img (click)=\"presentDelete()\" height=\"40px\" src=\"../../assets/garbage.svg\"></p>\n -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tripdetails/tripdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tripdetails/tripdetails.module.ts ***!
  \***************************************************/
/*! exports provided: TripdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripdetailsPageModule", function() { return TripdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tripdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tripdetails.page */ "./src/app/tripdetails/tripdetails.page.ts");







var routes = [
    {
        path: '',
        component: _tripdetails_page__WEBPACK_IMPORTED_MODULE_6__["TripdetailsPage"]
    }
];
var TripdetailsPageModule = /** @class */ (function () {
    function TripdetailsPageModule() {
    }
    TripdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tripdetails_page__WEBPACK_IMPORTED_MODULE_6__["TripdetailsPage"]]
        })
    ], TripdetailsPageModule);
    return TripdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/tripdetails/tripdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/tripdetails/tripdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXBkZXRhaWxzL3RyaXBkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tripdetails/tripdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/tripdetails/tripdetails.page.ts ***!
  \*************************************************/
/*! exports provided: TripdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripdetailsPage", function() { return TripdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");




var TripdetailsPage = /** @class */ (function () {
    function TripdetailsPage(route, router, socialSharing) {
        this.route = route;
        this.router = router;
        this.socialSharing = socialSharing;
    }
    TripdetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.trip;
            }
        });
    };
    TripdetailsPage.prototype.shareTrip = function () {
        // console.log(this.data.photo)
        var msg = this.compilemsg();
        this.socialSharing.share(msg, null, null, null);
    };
    TripdetailsPage.prototype.compilemsg = function () {
        var msg = this.data.eventTitle + " \n" +
            "@ " + this.data.city + ", " + this.data.province + " \n" +
            "From " + this.data.fromDate + " to " + this.data.toDate + " \n" + " \n" +
            this.data.aboutTrip + " \n" + " \n" +
            "You can can check out my cool photo here" + " \n" + " \n" +
            this.data.photo;
        // return msg.concat(" \n Sent from my Awesome App !" + " \n " + this.refernumber);
        return msg;
    };
    TripdetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] }
    ]; };
    TripdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tripdetails',
            template: __webpack_require__(/*! raw-loader!./tripdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/tripdetails/tripdetails.page.html"),
            styles: [__webpack_require__(/*! ./tripdetails.page.scss */ "./src/app/tripdetails/tripdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])
    ], TripdetailsPage);
    return TripdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tripdetails-tripdetails-module-es5.js.map