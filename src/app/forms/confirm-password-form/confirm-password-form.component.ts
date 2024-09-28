import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-confirm-password-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './confirm-password-form.component.html',
  styleUrl: './confirm-password-form.component.scss'
})
export class ConfirmPasswordFormComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required], [this.passwordsMatchValidator()]]
    });
  }

  passwordsMatchValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const password = this.passwordForm?.get('password')?.value;
      const confirmPassword = control.value;

      return of(password === confirmPassword ? null : { passwordsDoNotMatch: true }).pipe(delay(1000));
    };
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      console.log('Form Submitted:', this.passwordForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
