import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageRoutingModule } from './user-list-page-routing.module';
import { UsersListPageComponent } from './users-list-page.component';


@NgModule({
  declarations: [
    UsersListPageComponent
  ],
  imports: [
    CommonModule,
    UserListPageRoutingModule
  ]
})
export class UserListPageModule { }
