import { Inject, Injectable } from '@angular/core';
import { PouchStore } from '@rweng/pouchdb-store';
import debug = require('debug');

import { Entry } from './models';

@Injectable()
export class EntriesStore extends PouchStore<Entry> {
    constructor( @Inject('db') protected db: any) {
        super(db, 'entry', debug('lb:entries:store'));
    }
}
