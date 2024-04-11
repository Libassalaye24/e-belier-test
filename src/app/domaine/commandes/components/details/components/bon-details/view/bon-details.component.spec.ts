import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonDetailsComponent } from './bon-details.component';

describe('BonDetailsComponent', () => {
  let component: BonDetailsComponent;
  let fixture: ComponentFixture<BonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonDetailsComponent]
    });
    fixture = TestBed.createComponent(BonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
