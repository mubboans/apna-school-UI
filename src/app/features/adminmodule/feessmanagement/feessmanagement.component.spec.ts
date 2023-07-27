import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeessmanagementComponent } from './feessmanagement.component';

describe('FeessmanagementComponent', () => {
  let component: FeessmanagementComponent;
  let fixture: ComponentFixture<FeessmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeessmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeessmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
