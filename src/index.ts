declare const APP_ENV: string;

if (APP_ENV === 'production') {
    require('offline-plugin/runtime').install();
} else {
    window['DEBUG'] = 'lg*';
    (<any>localStorage).debug = 'lg*';
}

window['PouchDB'] = require('pouchdb');
import '!style!css!sass!./index.scss';

require('reflect-metadata');
require('zone.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule);
