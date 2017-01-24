"use strict";
var PhoneDetailController = (function () {
    function PhoneDetailController($routeParams, phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    return PhoneDetailController;
}());
PhoneDetailController.$inject = ['$routeParams', 'Phone'];
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map