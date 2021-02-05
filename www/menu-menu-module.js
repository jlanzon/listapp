(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _menu_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.router.module */ "wPxp");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.page */ "ylOD");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebaseui-angular */ "K9at");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _menu_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                firebaseui_angular__WEBPACK_IMPORTED_MODULE_6__["FirebaseUIModule"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_5__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane contentId=\"my-content\">\r\n  <ion-menu contentId=\"my-content\" content=\"menu\" class=\"menu_main\" side=\"start\">\r\n    <ion-header>\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-title>Start Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\r\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\">\r\n            <ion-icon [name]=\"p.icon\" routerLinkActive=\"active-item\" slot=\"start\"></ion-icon>\r\n            {{p.title}}\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n\r\n    <ion-footer *ngIf=\"auth.user | async as user; else showLogin\">\r\n      <ion-toolbar>\r\n        <ion-menu-toggle auto-hide=\"false\">\r\n          <ion-item horizontal=\"end\" routerLink=\"/menu/profile/\">\r\n            <ion-icon name=\"person\" routerLinkActive=\"active-item\" slot=\"start\"></ion-icon>\r\n            Hello {{ user.displayName }}\r\n          </ion-item>\r\n      </ion-menu-toggle>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n    <ng-template #showLogin>\r\n      <ion-toolbar>\r\n        <ion-menu-toggle auto-hide=\"false\">\r\n          <ion-item horizontal=\"end\" routerLink=\"/menu/login/\">\r\n            <ion-icon name=\"person\" routerLinkActive=\"active-item\" slot=\"start\"></ion-icon>\r\n            Login\r\n          </ion-item>\r\n      </ion-menu-toggle>\r\n      </ion-toolbar>\r\n    </ng-template>\r\n\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"my-content\" main></ion-router-outlet>\r\n\r\n</ion-split-pane>\r\n\r\n\r\n<!-- <ng-template #showLogin>\r\n  <ion-item horizontal=\"end\" routerLink=\"/menu/login/\">\r\n    <ion-icon name=\"person\" routerLinkActive=\"active-item\" slot=\"start\"></ion-icon>\r\n    Login\r\n  </ion-item>\r\n</ng-template> -->");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-item {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksK0JBQUE7QUFBSiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWN0aXZlLWl0ZW0ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */");

/***/ }),

/***/ "wPxp":
/*!********************************************!*\
  !*** ./src/app/menu/menu.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page */ "ylOD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "menu",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_2__["MenuPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'gallery',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tab2/tab2.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: 'receipts-test',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tab3/tab3.module#Tab3PageModule'
                    }
                ]
            },
            {
                path: "profile",
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: "terms",
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/terms/terms.module#TermsPageModule'
                    },
                ]
            },
            {
                path: "privacy",
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/privacy/privacy.module#PrivacyPageModule'
                    },
                ]
            },
            {
                path: "login",
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/login/login.module#LoginPageModule'
                    },
                ]
            },
            {
                path: "dev",
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/dev/dev.module#DevPageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/menu/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuPage = /** @class */ (function () {
    function MenuPage(menu, router, auth) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.auth = auth;
        this.pages = [
            {
                title: "Home Page",
                url: "/menu/home",
                icon: "home",
                vertical: "top"
            },
            {
                title: "Gallery",
                url: "/menu/gallery",
                icon: "images",
                vertical: "top"
            },
            {
                title: "Receipts-test",
                url: "/menu/receipts-test",
                icon: "code-working",
                vertical: "top"
            },
            {
                title: "Dev Environment ",
                url: "/menu/dev",
                icon: "code",
                vertical: "top"
            },
        ];
        this.selectedPath = "";
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MenuPage.prototype.login = function () {
        this.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth.EmailAuthProvider());
    };
    MenuPage.prototype.logout = function () {
        this.auth.signOut();
    };
    MenuPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
    ]; };
    MenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu',
            template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map