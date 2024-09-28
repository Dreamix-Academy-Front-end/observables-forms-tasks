import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],

  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss'
})
export class UserProfileFormComponent {
  userProfileForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userProfileForm = this.fb.group({
      userDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email], this.emailAsyncValidator.bind(this)],
      }),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      }),
    });
  }

  emailAsyncValidator(control: any) {
    this.loading = true;
    return of(control.value).pipe(
      delay(2000), // Simulate an API call delay
      map((email) => (this.isEmailTaken(email) ? { emailTaken: true } : null))
    );
  }

  isEmailTaken(email: string): boolean {
    // Simulate an email check (this would usually call an API)
    const takenEmails = ['test@example.com', 'user@example.com'];
    return takenEmails.includes(email);
  }

  onSubmit() {
    if (this.userProfileForm.valid) {
      console.log(this.userProfileForm.value);
    }
  }
}
