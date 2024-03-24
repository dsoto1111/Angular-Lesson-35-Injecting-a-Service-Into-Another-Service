import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class InstrumentsService {

    instruments: string[] = [];

    constructor(private loggerSvc: LoggerService) { }

    addToInstruments(instrument: string) {
        this.instruments.push(instrument);
        this.loggerSvc.addToLog(instrument);
    }
}
