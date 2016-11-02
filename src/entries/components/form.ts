import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AfterSet } from '@rweng/util';
import { merge, negate, isEmpty } from 'lodash';
import { Entry } from '../models';


@Component({
    selector: 'lb-entry-form',
    template: require('./form.html')
})
export class EntryForm {
    @Input()
    @AfterSet((i) => i.resetForm())
    entry: Entry;

    @Output()
    entryChange = new EventEmitter<Entry>();

    formGroup: FormGroup;

    constructor(fb: FormBuilder) {
        this.formGroup = fb.group({
            content: undefined,
            tags: undefined
        });
    }

    ngOnInit() {
        // TODO unsub
        this.formGroup.valueChanges.subscribe((v: { content: string, tags: string }) => {
            this.entryChange.emit(merge(
                { datetime: (new Date()).toISOString() },
                this.entry || {},
                {
                    content: v.content,
                    tags: v.tags && v.tags.split(',').map(t => t.trim()).filter(negate(isEmpty))
                }));
        });
    }

    resetForm() {
        const state = this.entry ? {
            content: this.entry.content,
            tags: this.entry.tags && this.entry.tags.join(',')
        } : undefined;

        this.formGroup.reset(state);
    }
}
