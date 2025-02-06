import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePostsComponent } from './schedule-posts.component';

describe('SchedulePostsComponent', () => {
  let component: SchedulePostsComponent;
  let fixture: ComponentFixture<SchedulePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePostsComponent]
    });
    fixture = TestBed.createComponent(SchedulePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
