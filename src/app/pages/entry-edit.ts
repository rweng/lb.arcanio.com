import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntriesStore, Entry } from '../../entries';

@Component({
    template: require('./entry-edit.html')
})
export class EntryEditPage {
    entry: Entry;

    constructor(
        private entriesStore: EntriesStore,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    save() {
        this.entriesStore.put(this.entry)
            .subscribe(() => this.router.navigate(['/']));
    }

    ngOnInit() {
        this.route.params.take(1).subscribe((params: any) => {
            if (params.id !== 'new') {
                this.entriesStore.get(params.id).subscribe(entry => this.entry = entry);
            }
        });
    }

    cancel() {
        this.router.navigate(['/']);
    }
}
