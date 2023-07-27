import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersmanagementComponent } from './teachersmanagement.component';

describe('TeachersmanagementComponent', () => {
  let component: TeachersmanagementComponent;
  let fixture: ComponentFixture<TeachersmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
