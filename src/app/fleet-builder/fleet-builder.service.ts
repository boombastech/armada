import {Injectable} from '@angular/core';
import {Ship} from '../models/Ship';
import {UpgradeSlot} from '../models/UpgradeSlot';

@Injectable()
export class FleetBuilderService {

  ships: ChosenShip[] = [];

  addShip(ship: Ship) {
    this.ships.push(new ChosenShip(ship));
  }
}

export class ChosenShip {
  ship: Ship;
  upgradeSlots: UpgradeSlot[];

  constructor(ship: Ship) {
    this.ship = ship;
    this.upgradeSlots = ship.upgradeSlots.map(upgradeSlot => new UpgradeSlot(upgradeSlot));
  }

  public totalCost(): number {
    let runningTotal: number = this.ship.cost;

    this.upgradeSlots.forEach(upgradeSlot => {
      if (upgradeSlot.chosenUpgrade) {
        runningTotal += upgradeSlot.chosenUpgrade.cost;
      }
    });
    return runningTotal;
  }
}
