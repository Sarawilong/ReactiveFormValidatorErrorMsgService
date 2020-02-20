import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-validation-management',
  templateUrl: './validation-management.component.html',
  styleUrls: ['./validation-management.component.scss']
})
export class ValidationManagementComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      name: [ '', Validators.required ],
      lastname: [ '', Validators.required ],
      email: [ '', [ValidationService.emailValidator]],
      password: ['', [ValidationService.passwordValidator]],
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(
        `Name: ${this.userForm.value.name}
        Email: ${this.userForm.value.email}`
      );
    }
  }
}
