import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantListComponent } from './applicant-list.component';
import { ApplicantEditComponent } from './applicant-edit/applicant-edit.component';

const routes: Routes = [
  { path: '', component: ApplicantListComponent },
  { path: 'edit', component: ApplicantEditComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ApplicantListRoutingModule {}
