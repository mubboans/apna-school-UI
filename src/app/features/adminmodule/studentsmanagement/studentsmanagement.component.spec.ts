import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsmanagementComponent } from './studentsmanagement.component';

describe('StudentsmanagementComponent', () => {
  let component: StudentsmanagementComponent;
  let fixture: ComponentFixture<StudentsmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
