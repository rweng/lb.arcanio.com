import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { merge } from 'lodash';

export interface Settings {
    syncUrl?: string;
}

const ID = 'settings';

@Injectable()
export class SettingsService {
    constructor( @Inject('db') protected db: any) { }

    load(): Observable<Settings> {
        return Observable.from(this.db.get(ID))
            .catch(err => Observable.of({ _id: ID }));
    }

    save(settings: Settings): Observable<any> {
        const promise = this.db.put(merge({}, settings, { _id: ID }));
        return Observable.from(promise);
    }

    patch(updates: Settings): Observable<any> {
        return this.load()
            .switchMap(settings => {
                return this.save(merge({}, settings, updates));
            });
    }
}
