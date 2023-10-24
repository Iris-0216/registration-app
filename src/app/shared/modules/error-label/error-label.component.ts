import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

const ERROR_MAP = new Map<string, string>([
  ['required', '{item} is required.'],
  ['email', 'Invalid Email address.'],
]);
@Component({
  selector: 'app-error-label',
  templateUrl: './error-label.component.html',
  styleUrls: ['./error-label.component.scss'],
})
export class ErrorLabelComponent {
  errorMessage: string = '';
  @Input() controlName = '';
  @Input()
  set errors(errors: ValidationErrors | null) {
    if (errors === undefined || errors === null) {
      return;
    } else {
      for (const validator of Object.keys(errors)) {
        const errorInfo = errors[validator];
        if (errorInfo) {
          switch (validator) {
            case 'required':
              this.errorMessage = ERROR_MAP.get(validator)!.replace(
                '{item}',
                this.controlName
              );
              break;
            case 'email':
              this.errorMessage = ERROR_MAP.get(validator)!;
              break;
          }
        }
      }
    }
  }
}
