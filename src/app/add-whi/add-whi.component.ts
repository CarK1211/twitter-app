import { Component, OnInit } from '@angular/core';
import { WhatsHappeningItemService } from '../whats-happening-item-service';
import { WhatsHappeningItemComponent } from '../whats-happening-item/whats-happening-item.component';

@Component({
  selector: 'app-add-whi',
  templateUrl: './add-whi.component.html',
  styleUrls: ['./add-whi.component.css']
})
export class AddWhiComponent implements OnInit {

  constructor(private service:WhatsHappeningItemService) { }

  ngOnInit(): void {
  }

  addWHI(item: WhatsHappeningItemComponent)
  {
    this.service.addWHI(item);
  }
}
