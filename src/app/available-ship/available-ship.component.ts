import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ship} from '../models/Ship';

@Component({
  selector: 'app-available-ship',
  templateUrl: './available-ship.component.html',
  styleUrls: ['./available-ship.component.css']
})
export class AvailableShipComponent implements OnInit {

  @Input() public ship: Ship;
  @Output() public shipSelected: EventEmitter<Ship> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addShip() {
    this.shipSelected.emit(this.ship);
  }
}
