import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    ReactiveFormsModule
  ]
})
export class ResumeModule { }