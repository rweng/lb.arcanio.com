declare const APP_ENV: string;

if (APP_ENV === 'production') {
    require('offline-plugin/runtime').install();
} else {
    window['DEBUG'] = 'fv*';
    (<any>localStorage).debug = 'fv*';
}

import '!style!css!sass!./index.scss';

require('reflect-metadata');
require('zone.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule);
