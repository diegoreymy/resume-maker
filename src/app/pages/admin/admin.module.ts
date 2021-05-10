import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BasicInfoFormComponent } from './components/basic-info-form/basic-info-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkExperienceFormComponent } from './components/work-experience-form/work-experience-form.component';
import { StudiesAndCertificationsFormComponent } from './components/studies-and-certifications-form/studies-and-certifications-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    BasicInfoFormComponent,
    WorkExperienceFormComponent,
    StudiesAndCertificationsFormComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }