import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.registrationForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      gender: [null, [Validators.required]],
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
  get gender(): FormControl {
    return this.registrationForm.get('gender') as FormControl;
  }

  submitForm() {}
}
