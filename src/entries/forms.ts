import { FormGroup, FormControl, Validators } from '@angular/forms';

export class EntryFormGroup extends FormGroup {
    controls: {
        entry: FormControl
    };

    constructor() {
        super({
            entry: new FormControl(null, Validators.required)
        });
    }
}
