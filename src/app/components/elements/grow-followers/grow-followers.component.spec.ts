import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowFollowersComponent } from './grow-followers.component';

describe('GrowFollowersComponent', () => {
  let component: GrowFollowersComponent;
  let fixture: ComponentFixture<GrowFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrowFollowersComponent]
    });
    fixture = TestBed.createComponent(GrowFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
