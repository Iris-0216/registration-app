import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantListService } from '../services/applicant-list.service';
import { Applicant } from 'src/app/models/applicant';

@Component({
  selector: 'app-applicant-edit',
  templateUrl: './applicant-edit.component.html',
  styleUrls: ['./applicant-edit.component.scss'],
})
export class ApplicantEditComponent {
  isChecked: boolean = false;
  isChanged: boolean = false;
  editForm!: FormGroup;
  applicant!: Applicant;
  receivedIndex!: number;
  gender: string = '';
  constructor(
    private fb: FormBuilder,
    private applicantListService: ApplicantListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.receivedIndex = this.route.snapshot.params['index'];
    this.applicant = this.applicantListService.getApplicant(this.receivedIndex);
    this.gender = this.applicant!.gender;
    this.buildForm();
    if (this.receivedIndex) {
      this.editForm.patchValue({
        name: this.applicant.name,
        email: this.applicant.email,
        birthday: this.applicant.birthday,
      });
      this.isChecked = this.gender === 'female';
    }
  }
  buildForm() {
    this.editForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      birthday: [null, [Validators.required]],
    });
  }

  get name(): FormControl {
    return this.editForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.editForm.get('email') as FormControl;
  }
  get birthday(): FormControl {
    return this.editForm.get('birthday') as FormControl;
  }

  onChange(e: any) {
    this.gender = e.target.value;
    this.isChanged = true;
  }

  cancel(): void {
    this.router.navigate(['/list']);
  }

  update() {
    const updatedApplicant: Applicant = {
      id: this.applicant.id,
      name: this.name.value,
      email: this.email.value,
      birthday: this.birthday.value,
      gender: this.gender,
    };
    this.applicantListService.updateApplicant(
      this.receivedIndex,
      updatedApplicant
    );
    this.editForm.reset();
    this.router.navigate(['/list']);
  }
}
