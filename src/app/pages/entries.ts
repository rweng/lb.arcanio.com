import { Component } from '@angular/core';
import debug = require('debug');
import { sortBy } from 'lodash';

import { EntryFormGroup, EntriesStore, Entry } from '../../entries';

@Component({
    template: require('./entries.html')
})
export class EntriesPage {
    protected log = debug('lg:app:pages:entries');
    entries: Entry[] = [];

    constructor(
        readonly formGroup: EntryFormGroup,
        readonly entriesStore: EntriesStore
    ) { }

    ngOnInit() {
        this.entriesStore.find().subscribe(entries => this.entries = sortBy(entries, ['datetime']).reverse());
    }

    save() {
        // TODO: add flash
        if (!this.formGroup.valid) {
            this.log('form invalid');
            return;
        }

        const entry = this.formGroup.getRawValue();

        this.log('saving', entry);
        this.entriesStore.put(entry);
        this.formGroup.patchValue({ content: null });
    }

    remove(entry: Entry) {
        this.entriesStore.remove(entry);
    }
}
