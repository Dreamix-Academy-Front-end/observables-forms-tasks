import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm: FormGroup;
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.userForm.invalid) return;
    console.log(this.userForm.value);
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('https://jsonplaceholder.typicode.com/posts', this.userForm.value)
      .pipe(
        finalize(() => this.loading = false),
        catchError(error => {
          this.errorMessage = 'Failed to submit the form. Please try again.';
          return of(error); 
        })
      )
      .subscribe(response => {
        this.successMessage = 'Form submitted successfully!';
        this.userForm.reset(); 
      });
  }
}
