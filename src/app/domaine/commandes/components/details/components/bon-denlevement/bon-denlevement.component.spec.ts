import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDenlevementComponent } from './bon-denlevement.component';

describe('BonDenlevementComponent', () => {
  let component: BonDenlevementComponent;
  let fixture: ComponentFixture<BonDenlevementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonDenlevementComponent]
    });
    fixture = TestBed.createComponent(BonDenlevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
