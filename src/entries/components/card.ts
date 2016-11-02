import { Component, Input } from '@angular/core';
import { Entry } from '../models';

@Component({
    selector: 'lb-entry-card',
    template: require('./card.html')
})
export class EntryCard {
    @Input()
    entry: Entry;
}
