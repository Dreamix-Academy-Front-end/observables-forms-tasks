import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
    }
  }

  // Custom validator for password length
  validatePasswordLength(password: string) {
    return password && password.length >= 8;
  }
}
