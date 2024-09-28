import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.scss'
})
export class PhoneFormComponent {
  phoneForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.phoneForm = this.fb.group({
      phones: this.fb.array([this.createFormField()])
    });
  }

  get phones(): FormArray {
    return this.phoneForm.get('phones') as FormArray;
  }

  createFormField(): FormGroup {
    return this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]]
    });
  }

  addPhoneField(): void {
    this.phones.push(this.createFormField());
  }

  removePhoneField(index: number): void {
    this.phones.removeAt(index);
  }

  onSubmit(): void {
    if (this.phoneForm.valid) {
      console.log("Submitted: ", this.phoneForm.value);
    } else {
      console.log("Invalid form");
    }
  }
}
