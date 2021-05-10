import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsCategoryFilterPipe } from './pipes/skills-category-filter.pipe';


@NgModule({
  declarations: [
    ResumeComponent,
    SkillsCategoryFilterPipe,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class ResumeModule { }