import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShipFilter, StubAvailableShipService} from './available-ships.service';
import {ShipType} from '../models/ShipType';
import {ActivatedRoute} from '@angular/router';
import {Ship} from '../models/Ship';
import {Faction, FactionsService} from '../factions.service';

@Component({
  selector: 'app-ship',
  templateUrl: './available-ships.component.html',
  styleUrls: ['./available-ships.component.css']
})
export class AvailableShipsComponent implements OnInit {

  private shipService: StubAvailableShipService;
  private route: ActivatedRoute;

  ships: ShipType[];
  private factionsService: FactionsService;

  @Output() public shipSelectedEvent: EventEmitter<Ship> = new EventEmitter();

  constructor(shipService: StubAvailableShipService,
              route: ActivatedRoute,
              factionsService: FactionsService) {
    this.shipService = shipService;
    this.route = route;
    this.factionsService = factionsService;
  }

  shipSelected(ship: Ship) {
    this.shipSelectedEvent.emit(ship);
  }

  ngOnInit() {
    const factionParam: string = this.route.snapshot.params['faction'];
    const faction: Faction = this.factionsService.getFaction(factionParam);

    this.ships = this.shipService.getShips(new ShipFilter(faction));
  }
}
