import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocStatsComponent } from './bloc-stats.component';

describe('BlocStatsComponent', () => {
  let component: BlocStatsComponent;
  let fixture: ComponentFixture<BlocStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlocStatsComponent]
    });
    fixture = TestBed.createComponent(BlocStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
