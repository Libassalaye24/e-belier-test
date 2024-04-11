import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlBlockComponent } from './bl-block.component';

describe('BlBlockComponent', () => {
  let component: BlBlockComponent;
  let fixture: ComponentFixture<BlBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlBlockComponent]
    });
    fixture = TestBed.createComponent(BlBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
