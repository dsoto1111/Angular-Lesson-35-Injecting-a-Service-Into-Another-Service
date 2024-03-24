import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    logEntries: string[] = [];

    constructor() { }

    addToLog(instrument: string) {
        console.log('The instrument ' + instrument + ' was added');
        this.logEntries.push('The instrument ' + instrument + ' was added');
    }
}
