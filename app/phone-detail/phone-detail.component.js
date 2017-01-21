var PhoneDetailController = (function () {
    function PhoneDetailController($routeParams, Phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        this.phone = Phone.get({ phoneId: phoneId }, function (phone) {
            _this.setImage(phone.images[0]);
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