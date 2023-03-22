import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginValidator } from './login-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  loginForm = this.fb.group({
    credentials: this.fb.group({
      email: ['', [Validators.required, LoginValidator.email]],
      password: ['', [Validators.required, LoginValidator.password]],
    }),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // exécuter le code de soumission du formulaire ici
    } else {
      console.log('Formulaire invalide, ho bah mince alors !');
    }
  }


  constructor(private fb: FormBuilder) {}
  
}
