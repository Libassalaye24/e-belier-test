import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfosComponent } from './card-infos.component';

describe('CardInfosComponent', () => {
  let component: CardInfosComponent;
  let fixture: ComponentFixture<CardInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInfosComponent]
    });
    fixture = TestBed.createComponent(CardInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
