import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from '@rweng/ng2-markdown';
import { values } from 'lodash';
import { EntriesStore } from './store';
import * as Components from './components';

export * from './store';
export * from './models';
export * from './components';

@NgModule({
    imports: [ReactiveFormsModule, CommonModule, MarkdownModule],
    declarations: [values(Components)],
    exports: [values(Components)],
    providers: [EntriesStore]
})
export class EntriesModule { }
