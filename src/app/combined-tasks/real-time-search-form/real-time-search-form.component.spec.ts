import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeSearchFormComponent } from './real-time-search-form.component';

describe('RealTimeSearchFormComponent', () => {
  let component: RealTimeSearchFormComponent;
  let fixture: ComponentFixture<RealTimeSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealTimeSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
