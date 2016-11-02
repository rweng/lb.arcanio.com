import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entry } from '../models';


@Component({
    selector: 'lb-entry-form-group',
    template: require('./form.html')
})
export class EntryFormGroup extends FormGroup {
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
            tags: (this.controls.tags.value || '').split(',').map((v: any) => v.trim())
        };
    }
}
