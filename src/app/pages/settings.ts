import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SettingsService } from '../services';

@Component({
    template: require('./settings.html')
})
export class SettingsPage {
    formGroup = new FormGroup({
        syncUrl: new FormControl(null, Validators.required)
    });

    constructor(protected settingsService: SettingsService) { }

    ngOnInit() {
        this.settingsService.load().subscribe((v: any) => this.formGroup.patchValue(v));
    }

    save() {
        this.settingsService.patch(this.formGroup.getRawValue())
            .subscribe(v => console.log('settings saved', v));
    }
}
