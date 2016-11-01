import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { values } from 'lodash';
import PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

import { EntriesModule } from '../entries';
import * as Components from './components';
import * as Pages from './pages';
import { routes } from './routes';


@NgModule({
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, NgbModule,
        RouterModule.forRoot(routes), EntriesModule
    ],
    declarations: [
        values(Pages), values(Components)
    ],
    providers: [
        {
            provide: 'db', useFactory: () => new PouchDB('LogBook')
        }
    ],
    bootstrap: [
        Components.AppComponent
    ]
})
export class AppModule {
}
