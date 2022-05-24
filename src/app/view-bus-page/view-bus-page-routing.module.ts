import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { ViewBusPageComponent } from './view-bus-page.component';

const routes: Routes = [{ path: '', component: ViewBusPageComponent, canActivate: [AuthGuard, RoleGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBusPageRoutingModule { }
