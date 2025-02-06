import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceGrowthComponent } from './audience-growth.component';

describe('AudienceGrowthComponent', () => {
  let component: AudienceGrowthComponent;
  let fixture: ComponentFixture<AudienceGrowthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudienceGrowthComponent]
    });
    fixture = TestBed.createComponent(AudienceGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
