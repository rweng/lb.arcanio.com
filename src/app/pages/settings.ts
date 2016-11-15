import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@rweng/ng2-notifications';

import { SyncService } from '../services';

@Component({
    template: require('./settings.html')
})
export class SettingsPage {

    formGroup = new FormGroup({
        syncUrl: new FormControl(this.syncService.url, Validators.required)
    });

    constructor(
        private ns: NotificationService,
        private router: Router,
        private syncService: SyncService
    ) { }

    save() {
        this.syncService.url = this.formData.syncUrl;
        this.syncService.connect();
        this.ns.push('Sync Url saved');
        this.router.navigate(['/']);
    }

    private get formData() {
        return this.formGroup.value;
    }
}
