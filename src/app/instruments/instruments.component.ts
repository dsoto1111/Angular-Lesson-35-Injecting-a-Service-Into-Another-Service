import { Component } from '@angular/core';
import { InstrumentsService } from '../instruments.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent {

    instruments: string[] = [];

    constructor(private instrumentsSvc: InstrumentsService) {
        this.instruments = instrumentsSvc.instruments;
    }
}
