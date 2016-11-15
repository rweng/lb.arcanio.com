import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SyncService } from '../services';

@Component({
    template: require('./settings.html')
})
export class SettingsPage {

    formGroup = new FormGroup({
        syncUrl: new FormControl(this.syncService.url, Validators.required)
    });

    constructor(protected syncService: SyncService) { }

    save() {
        this.syncService.url = this.formData.syncUrl;
        this.syncService.connect();
    }

    private get formData() {
        return this.formGroup.value;
    }
}
