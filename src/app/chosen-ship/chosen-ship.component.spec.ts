import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenShipComponent } from './chosen-ship.component';

describe('ChosenShipComponent', () => {
  let component: ChosenShipComponent;
  let fixture: ComponentFixture<ChosenShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
