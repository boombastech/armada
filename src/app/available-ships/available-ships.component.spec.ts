import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableShipComponent } from './available-ships.component';

describe('AvailableShipComponent', () => {
  let component: AvailableShipComponent;
  let fixture: ComponentFixture<AvailableShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
