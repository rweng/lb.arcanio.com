import { Routes } from '@angular/router';

import * as Pages from './pages';

export const routes: Routes = [
    { path: '', component: Pages.EntriesPage },
    { path: 'settings', component: Pages.SettingsPage },
    { path: '**', redirectTo: '/' }
];
