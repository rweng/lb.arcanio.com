import { NgModule } from '@angular/core';

import * as Forms from './forms';

export * from './forms';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [Forms.EntryFormGroup]
})
export class EntriesModule { }
