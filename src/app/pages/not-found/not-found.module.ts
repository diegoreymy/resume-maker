import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    ReactiveFormsModule
  ]
})
export class NotFoundModule { }