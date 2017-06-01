import {Component, DoCheck, OnInit} from '@angular/core';
import {Fleet} from './Fleet';
import {Ship} from '../models/Ship';
import {ChosenShip} from 'app/chosen-ship/chosen-ship';
import {FleetValidationService} from './fleet-validation.service';

@Component({
  selector: 'app-fleet-builder',
  templateUrl: './fleet-builder.component.html',
  styleUrls: ['./fleet-builder.component.css']
})
export class FleetBuilderComponent implements OnInit, DoCheck {

  public fleet: Fleet;

  constructor(private fleetValidationService: FleetValidationService) {}

  ngOnInit() {
    // if fleet id param
    // load that fleet
    // else
    this.fleet = new Fleet();
  }

  ngDoCheck(): void {
    this.fleetValidationService.validate(this.fleet);
  }

  public addShip(ship: Ship) {
    this.fleet.addShip(ship);
  }

  public removeShip(ship: ChosenShip) {
    this.fleet.removeShip(ship);
  }
}
