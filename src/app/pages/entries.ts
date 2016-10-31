import { Component } from '@angular/core';
import debug = require('debug');

import { EntryFormGroup, EntriesStore } from '../../entries';

@Component({
    template: require('./entries.html')
})
export class EntriesPage {
    protected log = debug('lg:app:pages:entries');

    constructor(
        readonly formGroup: EntryFormGroup,
        readonly entriesStore: EntriesStore
    ) { }

    save() {
        // TODO: add flash
        if (!this.formGroup.valid) {
            this.log('form invalid');
            return;
        }

        this.entriesStore.put(this.formGroup.getRawValue());
    }
}
