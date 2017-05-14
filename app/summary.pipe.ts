import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string, maxChar:number = 50): any {
        if (value) {
            return value.substring(0, maxChar) + "..."
        }
    }
}