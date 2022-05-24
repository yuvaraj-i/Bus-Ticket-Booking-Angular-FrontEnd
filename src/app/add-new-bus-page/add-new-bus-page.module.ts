import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewBusPageRoutingModule } from './add-new-bus-page-routing.module';
import { AddNewBusPageComponent } from './add-new-bus-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddNewBusPageComponent
  ],
  imports: [
    CommonModule,
    AddNewBusPageRoutingModule,
    FormsModule
  ]
})

export class AddNewBusPageModule { }
