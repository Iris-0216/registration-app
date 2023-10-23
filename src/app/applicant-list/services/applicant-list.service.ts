import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Applicant } from 'src/app/models/applicant';

@Injectable({
  providedIn: 'root',
})
export class ApplicantListService {
  private applicants: Applicant[] = [];
  applicantsChanged = new BehaviorSubject<Applicant[]>([]);
  constructor() {}
  getApplicants(): Applicant[] {
    return this.applicants.slice();
  }
  getApplicant(index: number): Applicant {
    return this.applicants[index];
  }
  addApplicant(applicant: Applicant) {
    this.applicants.push(applicant);
    this.applicantsChanged.next(this.applicants.slice());
  }
  updateApplicant(index: number, newApplicant: Applicant) {
    this.applicants[index] = newApplicant;
    this.applicantsChanged.next(this.applicants.slice());
  }
  deleteApplicant(index: number) {
    this.applicants.splice(index, 1);
    this.applicantsChanged.next(this.applicants.slice());
  }
}
