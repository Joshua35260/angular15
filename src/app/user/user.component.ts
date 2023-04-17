import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginValidator } from '../login-form/login-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm: FormGroup;
  newUser: any;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, LoginValidator.email]],
      password: ['', [Validators.required, LoginValidator.password]],
      address: this.fb.group({
        number: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });
  }
  onSubmit() {
    // Vérifie si le formulaire est valide avant de le soumettre
    if (this.userForm.valid) {
      this.submitted = true;
      const newUser = {
        userName: this.userForm.get('userName')?.value,
        email: this.userForm.get('email')?.value,
        password: this.userForm.get('password')?.value,
        address: this.userForm.get('address')?.value,
      };
      console.log('Nouvel utilisateur:', newUser);
    } else {
      this.submitted = true; // marque le formulaire comme soumis même s'il est invalide
    }
  }
}