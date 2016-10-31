import { Component } from '@angular/core';
import { EntryFormGroup } from '../../entries';

@Component({
    template: require('./entries.html')
})
export class EntriesPage {
    constructor(readonly formGroup: EntryFormGroup) {
    }
}
