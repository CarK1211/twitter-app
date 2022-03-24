import { Injectable } from "@angular/core";
import { WhatsHappeningItem } from "./whats-happening-item";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable(
    {providedIn: 'root'}
)
export class WhatsHappeningItemService
{
    private WHIendPoint:string = "whats-happening-items";

    constructor(private db:AngularFireDatabase)
    {

    }

    getItems()
    {
        //return this.http.get<WhatsHappeningItem []>(this.baseUrl + this.WHIendPoint);
        return this.db.list<WhatsHappeningItem>(this.WHIendPoint).valueChanges();
    }

    getItem(index:number)
    {
        return this.db.object<WhatsHappeningItem>(`${this.WHIendPoint}/${index}`).valueChanges();
    }
}