import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationsDenlevementComponent } from './autorisations-denlevement.component';

describe('AutorisationsDenlevementComponent', () => {
  let component: AutorisationsDenlevementComponent;
  let fixture: ComponentFixture<AutorisationsDenlevementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorisationsDenlevementComponent]
    });
    fixture = TestBed.createComponent(AutorisationsDenlevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
