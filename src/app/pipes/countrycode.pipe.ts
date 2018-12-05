import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countrycode'
})
export class CountryCodePipe implements PipeTransform {
    transform(value: number, code : string): string {
        switch(code){
            case 'US':
                return "+1 " + value;
            case 'AUS' :
                return "+20 " + value; 
            default : 
                return "+91 " + value;
        }
    }
}
