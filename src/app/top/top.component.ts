import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApplicantListService } from '../applicant-list/services/applicant-list.service';
import { Applicant } from '../models/applicant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  registrationForm!: FormGroup;
  gender = 'female';
  today: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private applicantListService: ApplicantListService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.registrationForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email]],
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
    this.router.navigate(['./list']);
  }
}
