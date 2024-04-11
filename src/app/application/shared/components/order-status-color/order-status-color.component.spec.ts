import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusColorComponent } from './order-status-color.component';

describe('OrderStatusColorComponent', () => {
  let component: OrderStatusColorComponent;
  let fixture: ComponentFixture<OrderStatusColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderStatusColorComponent]
    });
    fixture = TestBed.createComponent(OrderStatusColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
