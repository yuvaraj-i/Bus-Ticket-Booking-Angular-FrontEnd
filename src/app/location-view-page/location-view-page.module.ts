import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationViewPageRoutingModule } from './location-view-page-routing.module';
import { LocationViewPageComponent } from './location-view-page.component';


@NgModule({
  declarations: [
    LocationViewPageComponent
  ],
  imports: [
    CommonModule,
    LocationViewPageRoutingModule
  ]
})

export class LocationViewPageModule { }
