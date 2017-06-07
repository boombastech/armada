import {Component, Input, OnInit} from '@angular/core';
import {Fleet} from '../fleet-builder/Fleet';

@Component({
  selector: 'app-fleet-builder-nav',
  templateUrl: './fleet-builder-nav.component.html',
  styleUrls: ['./fleet-builder-nav.component.css']
})
export class FleetBuilderNavComponent implements OnInit {

  @Input() public fleet: Fleet;
  public fleetNameEdit = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleFleetNameEdit(element) {
    this.fleetNameEdit = true;
    console.log('element');
    console.log(element);
    element.focus();
  }
}
