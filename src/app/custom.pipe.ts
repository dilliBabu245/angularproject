
import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name:'summary'
})
export class customPipe implements PipeTransform
{
    transform(value:string,args?:any)
    {
        if(!value)
        {
            return null;
        }
        else{
            return value.slice(0,10);
        }
    }
}