import {Component, OnInit} from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
  moduleId: module.id,
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html'
})

export class PhoneListComponent {
  phones: PhoneData[];
  orderProp: string;
  query: string;

  constructor(private phone: Phone) { }

  ngOnInit(){
    this.getPhones();
    this.orderProp = 'age';
  }

  updateOrder(){    
    this.phones = this.sortPhones(this.phones);
  }

  filterList(){
    if(this.query){
      this.phones = this.filterPhones(this.phones);
    }
    else{
      this.getPhones();
    }    
  }

  private getPhones(): PhoneData[] {
      this.phone.query().subscribe(phones => {
        this.phones = phones;
      });
      return this.sortPhones(this.filterPhones(this.phones));
    }

  private filterPhones(phones: PhoneData[]) {
      if (phones && this.query) {
        return phones.filter(phone => {
          let name = phone.name.toLowerCase();
          let snippet = phone.snippet.toLowerCase();
          return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
        });
      }
      return phones;
    }

  private sortPhones(phones: PhoneData[]) {
      if (phones && this.orderProp) {
        return phones
          .slice(0) // Make a copy
          .sort((a, b) => {
            if (a[this.orderProp] < b[this.orderProp]) {
              return -1;
            } else if ([b[this.orderProp] < a[this.orderProp]]) {
              return 1;
            } else {
              return 0;
            }
          });
      }
      return phones;
    }
}
