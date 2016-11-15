import { Injectable, Inject } from '@angular/core';

const LOCAL_STORAGE_KEY = 'syncUrl';

@Injectable()
export class SyncService {
    private connection: any;

    constructor( @Inject('db') private db: any) {
    }

    get url() { return localStorage.getItem(LOCAL_STORAGE_KEY); }
    set url(val: string) { localStorage.setItem(LOCAL_STORAGE_KEY, val); }
    get isConnected() { return !!this.connection; }

    connect({live, retry, reconnect} = { live: false, retry: true, reconnect: true }) {
        if (this.isConnected) {
            if (reconnect) { this.connection.cancel(); }
            else { throw new Error('already connected. Pass reconnect: true to cancel connection and reconnect to current url'); }
        }

        this.connection = this.db.sync(this.url, { live, retry });
    }
}


