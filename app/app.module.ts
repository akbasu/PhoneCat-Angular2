import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {Phone} from './core/phone/phone.service';
import {PhoneListComponent} from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
    imports:[
        BrowserModule,
        UpgradeModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        PhoneListComponent,
        PhoneDetailComponent,
        CheckmarkPipe
    ],
    entryComponents: [
        PhoneListComponent,
        PhoneDetailComponent 
    ],
    providers:[
        Phone,
        {
            provide: '$routeParams',
            useFactory: (i: any) => i.get('$routeParams'), //routeParamsFactory,
            deps: ['$injector']
        }              
    ],
    /*export function routeParamsFactory(i: any){
            return i.get('$routeParams');
        }*/  
})


export class AppModule{
    ngDoBootstrap(){}
}