import { Component, OnInit } from '@angular/core';
import {ShipFilter, StubAvailableShipService} from './available-ships.service';
import {ShipType} from '../models/ShipType';
import {Router, ActivatedRoute} from '@angular/router';
import {Ship} from '../models/Ship';
import {FleetBuilderService} from '../fleet-builder/fleet-builder.service';
import {Faction, FactionsService} from '../factions.service';

@Component({
  selector: 'app-ship',
  templateUrl: './available-ships.component.html',
  styleUrls: ['./available-ships.component.css']
})
export class AvailableShipComponent implements OnInit {

  private shipService: StubAvailableShipService;
  private router: Router;
  private route: ActivatedRoute;
  private fleetBuilderService: FleetBuilderService;

  ships: ShipType[];
  private factionsService: FactionsService;

  constructor(shipService: StubAvailableShipService,
              router: Router, route: ActivatedRoute,
              fleetBuilderService: FleetBuilderService,
              factionsService: FactionsService) {
    this.shipService = shipService;
    this.router = router;
    this.route = route;
    this.fleetBuilderService = fleetBuilderService;
    this.factionsService = factionsService;
  }

  addShip(ship: Ship) {
    this.fleetBuilderService.addShip(ship);
  }

  ngOnInit() {
    const factionParam: string = this.route.snapshot.params['faction'];
    const faction: Faction = this.factionsService.getFaction(factionParam);

    this.ships = this.shipService.getShips(new ShipFilter(faction));
  }
}
