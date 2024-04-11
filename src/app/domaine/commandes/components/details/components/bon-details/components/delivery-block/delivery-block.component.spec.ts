import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBlockComponent } from './delivery-block.component';

describe('DeliveryBlockComponent', () => {
  let component: DeliveryBlockComponent;
  let fixture: ComponentFixture<DeliveryBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryBlockComponent]
    });
    fixture = TestBed.createComponent(DeliveryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
