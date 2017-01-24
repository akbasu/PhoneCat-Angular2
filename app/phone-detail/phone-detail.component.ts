declare var angular: angular.IAngularStatic;
import {downgradeComponent} from '@angular/upgrade/static';

import {Component, Inject} from '@angular/core';

import { Phone, PhoneData } from '../core/phone/phone.service';
@Component({
  moduleId: module.id,
  selector: 'phone-detail',
  templateUrl: 'phone-detail.template.html'
})

export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;
  

  constructor(@Inject('$routeParams') $routeParams: any, phone: Phone) {
    phone.get($routeParams['phoneId']).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.module('phoneDetail')
  .directive(
    'phoneDetail',
    downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  );