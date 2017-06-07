import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetBuilderNavComponent } from './fleet-builder-nav.component';

describe('FleetBuilderNavComponent', () => {
  let component: FleetBuilderNavComponent;
  let fixture: ComponentFixture<FleetBuilderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetBuilderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetBuilderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
