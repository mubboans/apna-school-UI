import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmoduleComponent } from './generalmodule.component';

describe('GeneralmoduleComponent', () => {
  let component: GeneralmoduleComponent;
  let fixture: ComponentFixture<GeneralmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
