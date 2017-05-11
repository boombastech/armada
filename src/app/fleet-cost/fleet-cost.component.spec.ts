import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetCostComponent } from './fleet-cost.component';

describe('FleetCostComponent', () => {
  let component: FleetCostComponent;
  let fixture: ComponentFixture<FleetCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
