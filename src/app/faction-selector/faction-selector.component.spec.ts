import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionSelectorComponent } from './faction-selector.component';

describe('FactionSelectorComponent', () => {
  let component: FactionSelectorComponent;
  let fixture: ComponentFixture<FactionSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
