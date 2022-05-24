import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLocationFormRoutingModule } from './add-location-form-routing.module';
import { AddLocationFormComponent } from './add-location-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddLocationFormComponent
  ],
  imports: [
    CommonModule,
    AddLocationFormRoutingModule,
    FormsModule
  ]
})
export class AddLocationFormModule { }
