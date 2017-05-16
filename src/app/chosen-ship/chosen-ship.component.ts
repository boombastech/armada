import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChosenShip} from './chosen-ship';

@Component({
  selector: 'app-chosen-ship',
  templateUrl: './chosen-ship.component.html',
  styleUrls: ['./chosen-ship.component.css']
})
export class ChosenShipComponent implements OnInit {
  @Input()
  chosenShip: ChosenShip;

  @Output()
  removeShip: EventEmitter<ChosenShip> = new EventEmitter();

  constructor() {
  }

  public remove() {
    this.removeShip.emit(this.chosenShip);
  }

  ngOnInit() {
  }
}
