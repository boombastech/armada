import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetBuilderComponent } from './fleet-builder.component';

describe('FleetBuilderComponent', () => {
  let component: FleetBuilderComponent;
  let fixture: ComponentFixture<FleetBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
