import { Component, OnInit } from '@angular/core';
import { MessageListItem } from '../message-list-item';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent
{
  items: MessageListItem[] = [
    new MessageListItem("../../../assets/download.png", "Sample Account", "Sample Message"),
    new MessageListItem("../../../assets/download.png", "Sample Account", "Sample Message"),
    new MessageListItem("../../../assets/download.png", "Sample Account", "Sample Message"),
    new MessageListItem("../../../assets/download.png", "Sample Account", "Sample Message"),
    new MessageListItem("../../../assets/download.png", "Sample Account", "Sample Message"),
  ];
}