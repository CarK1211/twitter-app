import { Component, OnInit } from '@angular/core';
import { WhatsHappeningItem } from '../whats-happening-item';
import { WhatsHappeningItemService } from '../whats-happening-item-service';

@Component({
  selector: 'app-whatshappening',
  templateUrl: './whatshappening.component.html',
  styleUrls: ['./whatshappening.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class WhatshappeningComponent implements OnInit
{
  items: WhatsHappeningItem[] = [];
  constructor(private itemService:WhatsHappeningItemService)
  {
    
  }

   ngOnInit(): void {
       this.itemService.getItems().subscribe((data: WhatsHappeningItem []) => {
         console.log("Fetching Items...")
         for (var item of data)
         {
           this.items.push(item);
         }
       });
   }
}