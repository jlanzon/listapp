(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Coding\App envi\listapp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCfNpViHjOSInsYM01wVa5-_8le7TMgKgg",
        authDomain: "testapp-529e2.firebaseapp.com",
        databaseURL: "https://testapp-529e2-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "testapp-529e2",
        storageBucket: "testapp-529e2.appspot.com",
        messagingSenderId: "998277791200",
        appId: "1:998277791200:web:03b378a64e7990a1d0ff85",
        measurementId: "G-N84K4VLN72"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n  \r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/item.service */ "jcKA");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebaseui-angular */ "K9at");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//firebase code





var firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebaseui_angular__WEBPACK_IMPORTED_MODULE_11__["firebase"].auth.EmailAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '/menu/terms',
    privacyPolicyUrl: '/menu/privacy',
    credentialHelper: firebaseui_angular__WEBPACK_IMPORTED_MODULE_11__["firebaseui"].auth.CredentialHelper.GOOGLE_YOLO
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                firebaseui_angular__WEBPACK_IMPORTED_MODULE_11__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig)
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
                _services_item_service__WEBPACK_IMPORTED_MODULE_10__["ItemService"],
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "jcKA":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = /** @class */ (function () {
    function ItemService(afs) {
        this.afs = afs;
        this.items = this.afs.collection("items").valueChanges();
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.pushItems = function () {
    };
    ItemService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
    ]; };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"0BR9",
		"common",
		2
	],
	"./ion-action-sheet-ios.entry.js": [
		"bnjm",
		"common",
		3
	],
	"./ion-action-sheet-md.entry.js": [
		"utt2",
		"common",
		4
	],
	"./ion-alert-ios.entry.js": [
		"yaSn",
		"common",
		5
	],
	"./ion-alert-md.entry.js": [
		"2/RY",
		"common",
		6
	],
	"./ion-app_8-ios.entry.js": [
		"iInF",
		0,
		"common",
		7
	],
	"./ion-app_8-md.entry.js": [
		"K9Nc",
		0,
		"common",
		8
	],
	"./ion-avatar_3-ios.entry.js": [
		"hH1s",
		"common",
		9
	],
	"./ion-avatar_3-md.entry.js": [
		"Jw9y",
		"common",
		10
	],
	"./ion-back-button-ios.entry.js": [
		"ouVF",
		"common",
		11
	],
	"./ion-back-button-md.entry.js": [
		"/joy",
		"common",
		12
	],
	"./ion-backdrop-ios.entry.js": [
		"uJLv",
		13
	],
	"./ion-backdrop-md.entry.js": [
		"fSmE",
		14
	],
	"./ion-button_2-ios.entry.js": [
		"s1jK",
		"common",
		15
	],
	"./ion-button_2-md.entry.js": [
		"Wou7",
		"common",
		16
	],
	"./ion-card_5-ios.entry.js": [
		"qshq",
		"common",
		17
	],
	"./ion-card_5-md.entry.js": [
		"Q1uX",
		"common",
		18
	],
	"./ion-checkbox-ios.entry.js": [
		"059i",
		"common",
		19
	],
	"./ion-checkbox-md.entry.js": [
		"eLfv",
		"common",
		20
	],
	"./ion-chip-ios.entry.js": [
		"+FzG",
		"common",
		21
	],
	"./ion-chip-md.entry.js": [
		"yRpg",
		"common",
		22
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		23
	],
	"./ion-datetime_3-ios.entry.js": [
		"Z1Jy",
		"common",
		24
	],
	"./ion-datetime_3-md.entry.js": [
		"X0Dk",
		"common",
		25
	],
	"./ion-fab_3-ios.entry.js": [
		"wvyA",
		"common",
		26
	],
	"./ion-fab_3-md.entry.js": [
		"NkKY",
		"common",
		27
	],
	"./ion-img.entry.js": [
		"wHD8",
		28
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"nf6t",
		"common",
		29
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"lg/V",
		"common",
		30
	],
	"./ion-input-ios.entry.js": [
		"sdJS",
		"common",
		31
	],
	"./ion-input-md.entry.js": [
		"uQUw",
		"common",
		32
	],
	"./ion-item-option_3-ios.entry.js": [
		"Pa1g",
		"common",
		33
	],
	"./ion-item-option_3-md.entry.js": [
		"KTnd",
		"common",
		34
	],
	"./ion-item_8-ios.entry.js": [
		"Z51p",
		"common",
		35
	],
	"./ion-item_8-md.entry.js": [
		"8bam",
		"common",
		36
	],
	"./ion-loading-ios.entry.js": [
		"J3Yu",
		"common",
		37
	],
	"./ion-loading-md.entry.js": [
		"N3W9",
		"common",
		38
	],
	"./ion-menu_4-ios.entry.js": [
		"GEuc",
		"common",
		39
	],
	"./ion-menu_4-md.entry.js": [
		"BHpw",
		"common",
		40
	],
	"./ion-modal-ios.entry.js": [
		"mgaC",
		0,
		"common",
		41
	],
	"./ion-modal-md.entry.js": [
		"EpFf",
		0,
		"common",
		42
	],
	"./ion-nav_5.entry.js": [
		"qF1+",
		0,
		"common",
		43
	],
	"./ion-popover-ios.entry.js": [
		"Gdks",
		0,
		"common",
		44
	],
	"./ion-popover-md.entry.js": [
		"VgKV",
		0,
		"common",
		45
	],
	"./ion-progress-bar-ios.entry.js": [
		"0PGG",
		"common",
		46
	],
	"./ion-progress-bar-md.entry.js": [
		"h/Bu",
		"common",
		47
	],
	"./ion-radio_2-ios.entry.js": [
		"5bK7",
		"common",
		48
	],
	"./ion-radio_2-md.entry.js": [
		"pOmE",
		"common",
		49
	],
	"./ion-range-ios.entry.js": [
		"5g9+",
		"common",
		50
	],
	"./ion-range-md.entry.js": [
		"fD4w",
		"common",
		51
	],
	"./ion-refresher_2-ios.entry.js": [
		"CXux",
		"common",
		52
	],
	"./ion-refresher_2-md.entry.js": [
		"RODS",
		"common",
		53
	],
	"./ion-reorder_2-ios.entry.js": [
		"IdzL",
		"common",
		54
	],
	"./ion-reorder_2-md.entry.js": [
		"Ftzj",
		"common",
		55
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		56
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		57
	],
	"./ion-searchbar-ios.entry.js": [
		"l0q3",
		"common",
		58
	],
	"./ion-searchbar-md.entry.js": [
		"mLlG",
		"common",
		59
	],
	"./ion-segment_2-ios.entry.js": [
		"Iymp",
		"common",
		60
	],
	"./ion-segment_2-md.entry.js": [
		"3msy",
		"common",
		61
	],
	"./ion-select_3-ios.entry.js": [
		"rYLK",
		"common",
		62
	],
	"./ion-select_3-md.entry.js": [
		"WOXB",
		"common",
		63
	],
	"./ion-slide_2-ios.entry.js": [
		"F/Xn",
		64
	],
	"./ion-slide_2-md.entry.js": [
		"k8us",
		65
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		66
	],
	"./ion-split-pane-ios.entry.js": [
		"edcM",
		67
	],
	"./ion-split-pane-md.entry.js": [
		"RyPD",
		68
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"DP4G",
		"common",
		69
	],
	"./ion-tab-bar_2-md.entry.js": [
		"gaXT",
		"common",
		70
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		1
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"xNZy",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"p1XJ",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"XGfm",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"Y/uG",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"WbT0",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"upP9",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dev/dev.module": [
		"TW5D",
		"pages-dev-dev-module"
	],
	"../pages/login/login.module": [
		"F4UR",
		"pages-login-login-module"
	],
	"../pages/privacy/privacy.module": [
		"ujr7",
		"pages-privacy-privacy-module"
	],
	"../pages/profile/profile.module": [
		"723k",
		"pages-profile-profile-module"
	],
	"../pages/tab1/tab1.module": [
		"uMfO",
		"pages-tab1-tab1-module"
	],
	"../pages/tab2/tab2.module": [
		"HJ/b",
		"default~pages-tab2-tab2-module~pages-tab3-tab3-module",
		"pages-tab2-tab2-module"
	],
	"../pages/tab3/tab3.module": [
		"XgaQ",
		"default~pages-tab2-tab2-module~pages-tab3-tab3-module",
		"pages-tab3-tab3-module"
	],
	"../pages/terms/terms.module": [
		"91Gy",
		"pages-terms-terms-module"
	],
	"./menu/menu.module": [
		"19mU",
		"menu-menu-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map