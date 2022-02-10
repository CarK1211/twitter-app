import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent
{
  profilePic: string;
  name: string;
  username: string;
  tweetText: string;
  replies: number;
  retweets: number;
  likes: number;

  constructor()
  {
    this.profilePic = "";
    this.name = "Carter Kiss";
    this.username = "@itscamcar";
    this.tweetText = "Sample"
    this.replies = 0;
    this.retweets = 0;
    this.likes = 0;
  }
}