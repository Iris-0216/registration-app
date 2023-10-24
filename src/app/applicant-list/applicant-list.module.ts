import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantEditComponent } from './applicant-edit/applicant-edit.component';
import { ApplicantListRoutingModule } from './applicant-list-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorLabelModule } from '../shared/modules/error-label/error-label.module';

@NgModule({
  declarations: [ApplicantListComponent, ApplicantEditComponent],
  imports: [
    CommonModule,
    ApplicantListRoutingModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    ErrorLabelModule,
  ],
})
export class ApplicantListModule {}
