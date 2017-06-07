import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShipType} from 'app/models/ShipType';
import {Ship} from 'app/models/Ship';

@Component({
  selector: 'app-available-ship-type',
  templateUrl: './available-ship-type.component.html',
  styleUrls: ['./available-ship-type.component.css']
})
export class AvailableShipTypeComponent {

  @Output() shipSelectedEvent: EventEmitter<Ship> = new EventEmitter();

  @Input() shipType: ShipType;

  public toggleShow = false;

  shipSelected(ship: Ship) {
    this.shipSelectedEvent.emit(ship);
  }
}
