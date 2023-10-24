import { Component, OnInit } from '@angular/core';
import { ApplicantListService } from './services/applicant-list.service';
import { Applicant } from '../models/applicant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss'],
})
export class ApplicantListComponent implements OnInit {
  showToast = false;
  applicantList: Applicant[] = [];
  constructor(
    private applicantListService: ApplicantListService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.applicantListService.applicantsChanged.subscribe((items) => {
      this.applicantList = items;
    });
  }
  updateApplicant(index: number) {
    this.router.navigate(['/list', index, 'edit']);
  }
  deleteApplicant(index: number) {
    this.applicantListService.deleteApplicant(index);
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 1500);
  }
}
