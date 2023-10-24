import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApplicantListService } from '../applicant-list/services/applicant-list.service';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  showToast = false;
  registrationForm!: FormGroup;
  gender = 'female';
  today: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private applicantListService: ApplicantListService
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.registrationForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      birthday: [null, [Validators.required]],
    });
  }

  get name(): FormControl {
    return this.registrationForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }
  get birthday(): FormControl {
    return this.registrationForm.get('birthday') as FormControl;
  }

  onChange(e: any) {
    this.gender = e.target.value;
  }

  submitForm() {
    const newApplicant: Applicant = {
      id: Date.now(),
      name: this.name.value,
      email: this.email.value,
      birthday: this.birthday.value,
      gender: this.gender,
    };

    this.applicantListService.addApplicant(newApplicant);
    this.registrationForm.reset();
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 1500);
  }
}
