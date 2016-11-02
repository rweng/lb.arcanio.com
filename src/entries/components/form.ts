import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import debug = require('debug');
import { Entry } from '../models';
import { EntriesStore } from '../store';


class EntryFormGroup extends FormGroup {
    controls: {
        content: FormControl,
        tags: FormControl
    };

    constructor() {
        super({
            content: new FormControl(null, Validators.required),
            tags: new FormControl()
        });
    }

    getRawValue(): Entry {
        return {
            datetime: (new Date()).toISOString(),
            content: this.controls.content.value,
            tags: this.controls.tags.value.split(',').map((v: any) => v.trim())
        };
    }
}

@Component({
    selector: 'lb-entry-form',
    template: require('./form.html'),
    providers: [EntryFormGroup]
})
export class EntryFormComponent {
    @Input()
    entry: Entry;

    protected log = debug('lg:entries:form');

    constructor(
        readonly entriesStore: EntriesStore,
        readonly formGroup: EntryFormGroup
    ) { }

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
}
