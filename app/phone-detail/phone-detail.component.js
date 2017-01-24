"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var static_1 = require("@angular/upgrade/static");
var core_1 = require("@angular/core");
var phone_service_1 = require("../core/phone/phone.service");
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent($routeParams, phone) {
        var _this = this;
        phone.get($routeParams['phoneId']).subscribe(function (phone) {
            _this.phone = phone;
            _this.setImage(phone.images[0]);
        });
    }
    PhoneDetailComponent.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    return PhoneDetailComponent;
}());
PhoneDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'phone-detail',
        templateUrl: 'phone-detail.template.html'
    }),
    __param(0, core_1.Inject('$routeParams')),
    __metadata("design:paramtypes", [Object, phone_service_1.Phone])
], PhoneDetailComponent);
exports.PhoneDetailComponent = PhoneDetailComponent;
angular.module('phoneDetail')
    .directive('phoneDetail', static_1.downgradeComponent({ component: PhoneDetailComponent }));
//# sourceMappingURL=phone-detail.component.js.map