import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingservicesComponent } from './staffingservices.component';

describe('StaffingservicesComponent', () => {
  let component: StaffingservicesComponent;
  let fixture: ComponentFixture<StaffingservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffingservicesComponent]
    });
    fixture = TestBed.createComponent(StaffingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
