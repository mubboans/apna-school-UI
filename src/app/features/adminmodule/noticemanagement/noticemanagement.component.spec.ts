import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticemanagementComponent } from './noticemanagement.component';

describe('NoticemanagementComponent', () => {
  let component: NoticemanagementComponent;
  let fixture: ComponentFixture<NoticemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticemanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
