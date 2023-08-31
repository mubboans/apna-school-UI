import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationmanagementComponent } from './donationmanagement.component';

describe('DonationmanagementComponent', () => {
  let component: DonationmanagementComponent;
  let fixture: ComponentFixture<DonationmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
