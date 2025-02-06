import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsistentScheduleComponent } from './consistent-schedule.component';

describe('ConsistentScheduleComponent', () => {
  let component: ConsistentScheduleComponent;
  let fixture: ComponentFixture<ConsistentScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsistentScheduleComponent]
    });
    fixture = TestBed.createComponent(ConsistentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
