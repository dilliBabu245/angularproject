import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class coursesService
{
    getCourses()
    {
        return["java","nodejs","python","selenium"];
    }
}