import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePlatformsComponent } from './multiple-platforms.component';

describe('MultiplePlatformsComponent', () => {
  let component: MultiplePlatformsComponent;
  let fixture: ComponentFixture<MultiplePlatformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplePlatformsComponent]
    });
    fixture = TestBed.createComponent(MultiplePlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
