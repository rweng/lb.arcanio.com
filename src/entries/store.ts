import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { not, isSet, assert } from '../lang';
import { Entry } from './models';

@Injectable()
export class EntriesStore {
    readonly prefix = 'entry:';
    constructor( @Inject('db') protected db: any) { }

    put(entry: Entry) {
        try {
            assert(entry._id, not(isSet), 'update not yet supported');
        } catch (e) { return Observable.throw(e); }

        const now = new Date().toISOString();
        entry._id = `${this.prefix}${now}`;

        const promise = this.db.put(entry)
            .then((res: any) => {
                return Object.assign({}, entry, { _id: res.id, _rev: res.rev });
            });

        return Observable.from<Entry>(promise);
    }

    findAll(): Observable<Entry[]> {
        return Observable.from(this.db.allDocs({ startkey: this.prefix, endkey: this.prefix + '\uffff', include_docs: true }))
            .map((res: any) => res.rows.map((r: any) => r.doc));
    }
}
