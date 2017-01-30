"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var phone_detail_component_1 = require("./phone-detail/phone-detail.component");
var phone_list_component_1 = require("./phone-list/phone-list.component");
var routes = [
    { path: '', redirectTo: 'phones', pathMatch: 'full' },
    { path: 'phones', component: phone_list_component_1.PhoneListComponent },
    { path: 'phones/:phoneId', component: phone_detail_component_1.PhoneDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
        providers: [
            { provide: common_1.APP_BASE_HREF, useValue: '!' },
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map