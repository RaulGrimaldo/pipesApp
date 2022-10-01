import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'booltostring'
})
export class BoolToStringPipe implements PipeTransform{

    transform(bool: boolean): string{
    
        return bool?'si':'no'
        
      }
}