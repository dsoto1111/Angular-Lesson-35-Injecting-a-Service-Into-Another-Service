import { Component } from '@angular/core';
import { InstrumentsService } from './instruments.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    instrument: string = "";

    constructor(private instrumentsSvc: InstrumentsService) {}

    addInstrument() {
        this.instrumentsSvc.addToInstruments(this.instrument);
        this.instrument = "";
    }
}
