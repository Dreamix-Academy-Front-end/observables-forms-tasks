import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-auto-save-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auto-save-form.component.html',
  styleUrl: './auto-save-form.component.scss'
})
export class AutoSaveFormComponent {
  draftForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.draftForm = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    const savedDraft = localStorage.getItem('formDraft');
    if (savedDraft) {
      this.draftForm.patchValue(JSON.parse(savedDraft));
    }

    this.draftForm.valueChanges.pipe(
      debounceTime(1000),
    ).subscribe(formValue => {
      localStorage.setItem('formDraft', JSON.stringify(formValue));
    });
  }

  onSubmit() {
    console.log('Form Submitted:', this.draftForm.value);
    localStorage.removeItem('formDraft');
  }
}
