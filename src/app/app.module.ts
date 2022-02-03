import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { FooterComponent } from './footer/footer.component';
import { WhatshappeningComponent } from './whatshappening/whatshappening.component';
import { WhotofollowComponent } from './whotofollow/whotofollow.component';
import { ActualFooterComponent } from './actual-footer/actual-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    NavLinksComponent,
    FooterComponent,
    WhatshappeningComponent,
    WhotofollowComponent,
    ActualFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
