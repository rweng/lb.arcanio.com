import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EntriesStore, EntryFormGroup } from '../../entries';

@Component({
    template: require('./entry-edit.html')
})
export class EntryEditPage {
    @ViewChild(EntryFormGroup)
    entryForm: EntryFormGroup;

    constructor(
        private entriesStore: EntriesStore,
        private router: Router
    ) { }

    save() {
        // TODO: add flash
        if (!this.entryForm.valid) {
            console.log('form invalid');
            return;
        }

        this.entriesStore.put(this.entryForm.getRawValue())
            .subscribe(() => this.router.navigate(['/']));
    }

    cancel() {
        this.router.navigate(['/']);
    }
}
