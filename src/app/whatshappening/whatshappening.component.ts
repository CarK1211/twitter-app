import { Component, OnInit } from '@angular/core';
import { WhatsHappeningItem } from '../whats-happening-item';

@Component({
  selector: 'app-whatshappening',
  templateUrl: './whatshappening.component.html',
  styleUrls: ['./whatshappening.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class WhatshappeningComponent
{
   items: WhatsHappeningItem[] = [
     new WhatsHappeningItem("Twitter - Live", "Man tries to recreate Twitter, legal action is being taken.", ""),
     new WhatsHappeningItem("Video Games - 69 minutes ago", "Mojang announces 'Minecraft 2', contains no cubes.", "../../../assets/minecraft-1-logo-png-transparent.png"),
     new WhatsHappeningItem("Food - 7 hours ago", "Man dies eating 413 Chicken McNuggets", "")
   ];
}