import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { FooterComponent } from './footer/footer.component';
import { WhatshappeningComponent } from './whatshappening/whatshappening.component';
import { WhotofollowComponent } from './whotofollow/whotofollow.component';
import { ActualFooterComponent } from './actual-footer/actual-footer.component';
import { TweetsComponent } from './tweets/tweets.component';
import { WhatsHappeningItemComponent } from './whats-happening-item/whats-happening-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    NavLinksComponent,
    FooterComponent,
    WhatshappeningComponent,
    WhotofollowComponent,
    ActualFooterComponent,
    TweetsComponent,
    WhatsHappeningItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
