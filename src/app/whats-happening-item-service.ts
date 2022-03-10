import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WhatsHappeningItem } from "./whats-happening-item";

@Injectable(
    {providedIn: 'root'}
)
export class WhatsHappeningItemService
{
    private baseUrl:string = "https://twitter-app-1f60b-default-rtdb.firebaseio.com/";
    private WHIendPoint:string = "whats-happening-items.json";

    constructor(private http:HttpClient)
    {

    }

    getItems()
    {
        return this.http.get<WhatsHappeningItem []>(this.baseUrl + this.WHIendPoint);
    }

    getItem(index:number)
    {
        return this.http.get<WhatsHappeningItem>(this.baseUrl + 'whats-happening-items' + '/' + index + '.json');
    }
}