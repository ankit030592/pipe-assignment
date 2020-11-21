import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: string){
        if(value.length<2){
            return value
        }

        return value.split('').reverse().join('')

    }
}