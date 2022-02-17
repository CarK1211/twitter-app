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
import { AppRoutingModule } from './app-routing.module';
import { ExploreNavBarComponent } from './explore-nav-bar/explore-nav-bar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesHeaderComponent } from './messages-header/messages-header.component';
import { ListsHeaderComponent } from './lists-header/lists-header.component';
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';

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
    WhatsHappeningItemComponent,
    ExploreNavBarComponent,
    NotificationsComponent,
    MessagesHeaderComponent,
    ListsHeaderComponent,
    ProfileNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
