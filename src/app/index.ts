import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import PouchDB = require('pouchdb');

import { EntriesModule } from '../entries';
import { values } from './lang';
import * as Components from './components';
import * as Pages from './pages';
import { routes } from './routes';


@NgModule({
    imports: [
        BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, NgbModule,
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
