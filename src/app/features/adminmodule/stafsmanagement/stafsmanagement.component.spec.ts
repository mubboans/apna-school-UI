import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafsmanagementComponent } from './stafsmanagement.component';

describe('StafsmanagementComponent', () => {
  let component: StafsmanagementComponent;
  let fixture: ComponentFixture<StafsmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafsmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StafsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
