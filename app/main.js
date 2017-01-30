"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
/*import {UpgradeModule} from '@angular/upgrade/static';*/
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
/*.then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});*/ 
//# sourceMappingURL=main.js.map