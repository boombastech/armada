import {Ship} from '../models/Ship';
import {ChosenShip} from '../chosen-ship/chosen-ship';
import {ValidationResults} from './fleet-validation.service';
import {Faction} from '../factions.service';
export class Fleet {
  name = 'Unnamed Fleet';
  ships: ChosenShip[] = [];
  squadrons: Squadron[] = [];
  validation: ValidationResults;
  fleetRules = new FleetRules();

  public points(): number {
    let cost = 0;
    this.ships.map(ship => ship.totalCost()).forEach(points => cost += points);
    this.squadrons.map(squadron => squadron.cost).forEach(points => cost += points);
    return cost;
  }

  addShip(ship: Ship) {
    this.ships.push(new ChosenShip(ship));
  }

  removeShip(ship: ChosenShip) {
    const shipIndex = this.ships.indexOf(ship);
    if (shipIndex !== -1) {
      this.ships.splice(shipIndex, 1);
    }
  }
}

export class SquadronType {
  constructor(public name: string, public faction: Faction, public squadrons: Squadron[]) {}
}

export class Squadron {
  constructor(public name: string, public cost: number, public unique: boolean) {}
}

export class FleetRules {
  maxPoints = 400;
}
