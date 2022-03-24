import { Component, OnInit } from '@angular/core';
import { UserInfo } from './user-info';
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private db:AngularFireDatabase) { }

  ngOnInit(): void {
    console.log("Sending get request...");
    this.showUserInfo();
  }

  getUserInfo()
  {
    return this.db.object<UserInfo>("myinfo").valueChanges();
  }

  showUserInfo()
  {
    this.getUserInfo().subscribe((data: any) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
