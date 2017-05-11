import {Component, OnInit} from '@angular/core';
import {ChosenShip, FleetBuilderService} from './fleet-builder.service';

@Component({
  selector: 'app-fleet-builder',
  templateUrl: './fleet-builder.component.html',
  styleUrls: ['./fleet-builder.component.css']
})
export class FleetBuilderComponent implements OnInit {
  ships: ChosenShip[];

  private fleetBuilderService: FleetBuilderService;

  constructor(fleetBuilderService: FleetBuilderService) {
    this.fleetBuilderService = fleetBuilderService;
  }

  ngOnInit() {
    this.ships = this.fleetBuilderService.ships;
  }
}
