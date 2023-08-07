import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarymanagementComponent } from './salarymanagement.component';

describe('SalarymanagementComponent', () => {
  let component: SalarymanagementComponent;
  let fixture: ComponentFixture<SalarymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarymanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
