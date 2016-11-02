import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntriesStore } from './store';
import { EntryFormGroup } from './components';

export * from './store';
export * from './models';
export * from './components';

@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [EntryFormGroup],
    exports: [EntryFormGroup],
    providers: [EntriesStore]
})
export class EntriesModule { }
