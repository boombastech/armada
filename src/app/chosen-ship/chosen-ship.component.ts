import {Component, Input, OnInit} from '@angular/core';
import {ChosenShip} from '../fleet-builder/fleet-builder.service';

@Component({
  selector: 'app-chosen-ship',
  templateUrl: './chosen-ship.component.html',
  styleUrls: ['./chosen-ship.component.css']
})
export class ChosenShipComponent implements OnInit {
  @Input()
  chosenShip: ChosenShip;

  constructor() {
  }

  ngOnInit() {
  }
}
