import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptLoginComponent } from './opt-login.component';

describe('OptLoginComponent', () => {
  let component: OptLoginComponent;
  let fixture: ComponentFixture<OptLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptLoginComponent]
    });
    fixture = TestBed.createComponent(OptLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
