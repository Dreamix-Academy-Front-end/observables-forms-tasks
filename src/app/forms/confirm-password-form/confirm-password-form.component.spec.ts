import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPasswordFormComponent } from './confirm-password-form.component';

describe('ConfirmPasswordFormComponent', () => {
  let component: ConfirmPasswordFormComponent;
  let fixture: ComponentFixture<ConfirmPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPasswordFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
