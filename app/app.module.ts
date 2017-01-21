import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
//import {UpgradeModule} from '@angular/upgrade/src/aot/upgrade_module';

@NgModule({
    imports:[
        BrowserModule,
        UpgradeModule
    ],
})
export class AppModule{
    ngDoBootstrap(){}
}