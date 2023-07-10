import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItservicesComponent } from './itservices.component';

describe('ItservicesComponent', () => {
  let component: ItservicesComponent;
  let fixture: ComponentFixture<ItservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItservicesComponent]
    });
    fixture = TestBed.createComponent(ItservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
