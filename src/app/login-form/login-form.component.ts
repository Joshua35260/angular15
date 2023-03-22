import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // exécuter le code de soumission du formulaire ici
    } else {
      console.log('Formulaire invalide, ho bah mince alors !');
    }
  }

  userForm = this.fb.group({
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}
}
