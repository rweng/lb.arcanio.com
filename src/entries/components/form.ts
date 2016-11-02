import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DefaultsTo } from '@rweng/util';
import { constant, merge, negate, isEmpty } from 'lodash';
import { Entry } from '../models';


@Component({
    selector: 'lb-entry-form',
    template: require('./form.html')
})
export class EntryForm {
    @Input()
    @DefaultsTo(constant({ datetime: (new Date()).toISOString() }))
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
            this.entryChange.emit(merge(this.entry, {
                content: v.content,
                tags: v.tags && v.tags.split(',').map(t => t.trim()).filter(negate(isEmpty))
            }));
        });
    }

    ngOnChanges() {
        this.formGroup.reset({
            content: this.entry.content,
            tags: this.entry.tags && this.entry.tags.join(',')
        });
    }
}
