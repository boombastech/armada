import {Component, OnInit} from '@angular/core';
import {Fleet} from './Fleet';
import {Ship} from '../models/Ship';
import {ChosenShip} from 'app/chosen-ship/chosen-ship';

@Component({
  selector: 'app-fleet-builder',
  templateUrl: './fleet-builder.component.html',
  styleUrls: ['./fleet-builder.component.css']
})
export class FleetBuilderComponent implements OnInit {
  public fleet: Fleet = new Fleet();

  constructor() {
  }

  ngOnInit() {
  }

  public addShip(ship: Ship) {
    this.fleet.addShip(ship);
  }

  public removeShip(ship: ChosenShip) {
    this.fleet.removeShip(ship);
  }
}
