import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entry } from './models';

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
        return super.getRawValue() as Entry;
    }
}
