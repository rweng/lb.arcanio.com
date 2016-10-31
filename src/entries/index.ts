import { NgModule } from '@angular/core';

import * as Forms from './forms';
import { EntriesStore } from './store';

export * from './forms';
export * from './store';
export * from './models';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [Forms.EntryFormGroup, EntriesStore]
})
export class EntriesModule { }