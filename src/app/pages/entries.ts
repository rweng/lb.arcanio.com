import { Component } from '@angular/core';
import debug = require('debug');
import { sortBy } from 'lodash';

import { EntriesStore, Entry } from '../../entries';

@Component({
    template: require('./entries.html')
})
export class EntriesPage {
    protected log = debug('lg:app:pages:entries');
    entries: Entry[] = [];

    constructor(
        readonly entriesStore: EntriesStore
    ) { }

    ngOnInit() {
        this.entriesStore.find().subscribe(entries => this.entries = sortBy(entries, ['datetime']).reverse());
    }

    remove(entry: Entry) {
        this.entriesStore.remove(entry);
    }
}
