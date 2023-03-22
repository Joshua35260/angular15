import { AbstractControl, Validators, ValidationErrors } from '@angular/forms';

export class LoginValidator {

  static email(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const valid = emailRegex.test(control.value);

    const errors = {
      email: {
        rules: 'doit être un email valide'
      }
    };

    return !valid ? errors : null;
  }
  
  static password(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = RegExp('(?=.*[A-Z])');
    const valid = passwordRegex.test(control.value);

    const errors = {
      password: {
        rules: 'doit contenir au moins une majuscule'
      }
    };

    return !valid ? errors : null;
  }

}
