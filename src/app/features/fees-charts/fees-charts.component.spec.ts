import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesChartsComponent } from './fees-charts.component';

describe('FeesChartsComponent', () => {
  let component: FeesChartsComponent;
  let fixture: ComponentFixture<FeesChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
