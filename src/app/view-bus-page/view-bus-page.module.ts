import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBusPageRoutingModule } from './view-bus-page-routing.module';
import { ViewBusPageComponent } from './view-bus-page.component';

@NgModule({
  declarations: [
    ViewBusPageComponent
  ],
  imports: [
    CommonModule,
    ViewBusPageRoutingModule
  ]
})
export class ViewBusPageModule { }
