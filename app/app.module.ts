import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {Phone} from './core/phone/phone.service';
import {PhoneListComponent} from './phone-list/phone-list.component';

@NgModule({
    imports:[
        BrowserModule,
        UpgradeModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        PhoneListComponent
    ],
    entryComponents: [
        PhoneListComponent
    ],
    providers:[
        Phone,
    ]
})
export class AppModule{
    ngDoBootstrap(){}
}