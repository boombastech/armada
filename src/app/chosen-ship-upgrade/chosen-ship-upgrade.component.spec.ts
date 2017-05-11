import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenShipUpgradeComponent } from './chosen-ship-upgrade.component';

describe('ChosenShipUpgradeComponent', () => {
  let component: ChosenShipUpgradeComponent;
  let fixture: ComponentFixture<ChosenShipUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenShipUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenShipUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
