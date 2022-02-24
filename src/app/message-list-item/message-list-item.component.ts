import { Component, Input, OnInit } from '@angular/core';
import { MessageListItem } from '../message-list-item';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css']
})
export class MessageListItemComponent
{
  @Input() username: string;
  @Input() text: string;
  @Input() image: string;

  constructor()
  {
    this.username = "";
    this.text = "";
    this.image = "";
  }
}
