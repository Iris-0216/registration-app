import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./applicant-list/applicant-list.module').then(
        (m) => m.ApplicantListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
