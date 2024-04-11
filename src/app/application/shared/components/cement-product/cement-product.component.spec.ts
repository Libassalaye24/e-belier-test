import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CementProductComponent } from './cement-product.component';

describe('CementProductComponent', () => {
  let component: CementProductComponent;
  let fixture: ComponentFixture<CementProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CementProductComponent]
    });
    fixture = TestBed.createComponent(CementProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
