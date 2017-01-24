"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var static_1 = require("@angular/upgrade/static");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var phone_service_1 = require("./core/phone/phone.service");
var phone_list_component_1 = require("./phone-list/phone-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngDoBootstrap = function () { };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            static_1.UpgradeModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [
            phone_list_component_1.PhoneListComponent
        ],
        entryComponents: [
            phone_list_component_1.PhoneListComponent
        ],
        providers: [
            phone_service_1.Phone,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map