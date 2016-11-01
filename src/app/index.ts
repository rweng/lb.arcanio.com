import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from '@rweng/ng2-markdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { values } from 'lodash';
import PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

import { EntriesModule } from '../entries';
import * as Components from './components';
import * as Pages from './pages';
import * as Services from './services';
import { routes } from './routes';


@NgModule({
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, NgbModule,
        RouterModule.forRoot(routes), EntriesModule, CommonModule, MarkdownModule
    ],
    declarations: [
        values(Pages), values(Components)
    ],
    providers: [
        values(Services),
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
