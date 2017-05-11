import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableUpgradesComponent } from './available-upgrades.component';

describe('AvailableUpgradesComponent', () => {
  let component: AvailableUpgradesComponent;
  let fixture: ComponentFixture<AvailableUpgradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableUpgradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableUpgradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
