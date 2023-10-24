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
  targets: string[] = [];
  indexMap: any = {};
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
    this.setToast();
  }

  onChange(e: any, index: number) {
    if (e.target.checked) {
      this.indexMap[index] = true;
    } else {
      this.indexMap[index] = false;
    }

    this.targets = Object.keys(this.indexMap).filter(
      (index) => this.indexMap[index]
    );
  }

  deleteApplicants() {
    this.applicantListService.deleteApplicants(this.targets);
    this.setToast();
  }

  setToast() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 1500);
  }
}
