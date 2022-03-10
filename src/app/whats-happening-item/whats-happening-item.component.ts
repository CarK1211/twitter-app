import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-happening-item',
  templateUrl: './whats-happening-item.component.html',
  styleUrls: ['./whats-happening-item.component.css']
})
export class WhatsHappeningItemComponent{

  @Input() categoryAndTime: string;
  @Input() text: string;
  @Input() img: string;

  constructor()
  {
    this.categoryAndTime = "";
    this.text = "";
    this.img = "";
  }
}
