import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableShipTypeComponent } from './available-ship-type.component';

describe('AvailableShipTypeComponent', () => {
  let component: AvailableShipTypeComponent;
  let fixture: ComponentFixture<AvailableShipTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableShipTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableShipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
