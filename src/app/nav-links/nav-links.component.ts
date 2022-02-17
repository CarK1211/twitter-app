import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {

  @Input() routerLink: string | any[] | null | undefined = "";
  @Input() linkText: String = "";

  constructor() { }

  

}
