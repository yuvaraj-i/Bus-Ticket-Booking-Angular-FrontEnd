import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { UsersListPageComponent } from './users-list-page.component';

const routes: Routes = [{ path: '', component: UsersListPageComponent, canActivate: [AuthGuard, RoleGuard] } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserListPageRoutingModule { }
