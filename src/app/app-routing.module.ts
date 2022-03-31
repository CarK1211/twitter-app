import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ExploreNavBarComponent } from './explore-nav-bar/explore-nav-bar.component';
import { TweetsComponent } from './tweets/tweets.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesHeaderComponent } from './messages-header/messages-header.component';
import { ListsHeaderComponent } from './lists-header/lists-header.component';
import { ProfileNavbarComponent } from './profile-navbar/profile-navbar.component';
import { AddWhiComponent } from './add-whi/add-whi.component';

const routes:Routes = [
  {path: '', component: TweetsComponent},
  {path: 'home', component: TweetsComponent},
  {path: 'explore', component: ExploreNavBarComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'messages', component: MessagesHeaderComponent},
  {path: 'lists', component: ListsHeaderComponent},
  {path: 'profile', component: ProfileNavbarComponent},
  {path: 'admin', component: AddWhiComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
