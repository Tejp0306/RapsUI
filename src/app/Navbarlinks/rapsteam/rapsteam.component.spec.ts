import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapsteamComponent } from './rapsteam.component';

describe('RapsteamComponent', () => {
  let component: RapsteamComponent;
  let fixture: ComponentFixture<RapsteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapsteamComponent]
    });
    fixture = TestBed.createComponent(RapsteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
