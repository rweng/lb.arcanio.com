import { Component } from '@angular/core';
import debug = require('debug');

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
        this.entriesStore.find().subscribe(entries => this.entries = entries);
    }

    save() {
        // TODO: add flash
        if (!this.formGroup.valid) {
            this.log('form invalid');
            return;
        }

        this.log('saving');
        this.entriesStore.put(this.formGroup.getRawValue());
        this.formGroup.patchValue({content: null});
    }
}
