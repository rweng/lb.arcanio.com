import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntriesStore } from './store';
import { EntryFormComponent } from './components';

export * from './store';
export * from './models';

@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [EntryFormComponent],
    exports: [EntryFormComponent],
    providers: [EntriesStore]
})
export class EntriesModule { }
