import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsRapidesComponent } from './actions-rapides.component';

describe('ActionsRapidesComponent', () => {
  let component: ActionsRapidesComponent;
  let fixture: ComponentFixture<ActionsRapidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsRapidesComponent]
    });
    fixture = TestBed.createComponent(ActionsRapidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
