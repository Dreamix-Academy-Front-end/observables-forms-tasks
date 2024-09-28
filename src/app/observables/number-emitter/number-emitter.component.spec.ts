import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEmitterComponent } from './number-emitter.component';

describe('NumberEmitterComponent', () => {
  let component: NumberEmitterComponent;
  let fixture: ComponentFixture<NumberEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberEmitterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
