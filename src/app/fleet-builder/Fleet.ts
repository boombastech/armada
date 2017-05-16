import {Ship} from '../models/Ship';
import {ChosenShip} from '../chosen-ship/chosen-ship';
export class Fleet {
  ships: ChosenShip[] = [];
  private squadrons: any[] = [];

  private name: string;
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

export class Squadron {
  public cost: number;
}
