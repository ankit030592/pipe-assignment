import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: any, filterValue: string, propType: string){
        if(value.length === 0 || filterValue === ''){
            return value
        }
        let filteredArray = [];
        value.forEach(element => {
            if(element[propType] === filterValue){
                filteredArray.push(element)
            }
        });

        console.log(filteredArray);
        return filteredArray;
    }
}