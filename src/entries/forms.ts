import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entry } from './models';
import { merge } from 'lodash';

export class EntryFormGroup extends FormGroup {
    controls: {
        content: FormControl
    };

    constructor() {
        super({
            content: new FormControl(null, Validators.required)
        });
    }

    getRawValue(): Entry {
        return merge(
            { datetime: (new Date()).toISOString() },
            super.getRawValue()
        ) as Entry;
    }
}
