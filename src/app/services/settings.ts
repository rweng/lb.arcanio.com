import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { merge } from 'lodash';
import { NotificationService } from '@rweng/ng2-notifications';

export interface Settings {
    syncUrl?: string;
}

const ID = 'settings';

@Injectable()
export class SettingsService {
    constructor(
        @Inject('db') protected db: any,
        private ns: NotificationService
    ) { }

    load(): Observable<Settings> {
        return Observable.from(this.db.get(ID))
            .catch(err => Observable.of({ _id: ID }));
    }

    save(settings: Settings) {
        const promise = this.db.put(merge({}, settings, { _id: ID })).then(() => this.ns.push('Saved'));
        return Observable.from(promise);
    }

    patch(updates: Settings): Observable<any> {
        return this.load()
            .switchMap(settings => {
                return this.save(merge({}, settings, updates));
            });
    }
}
