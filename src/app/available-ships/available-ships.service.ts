import {Injectable} from '@angular/core';
import {ShipType} from 'app/models/ShipType';
import {Ship} from '../models/Ship';
import {Faction} from '../factions.service';
import {UpgradeType} from '../upgrade-type.service';

@Injectable()
export class StubAvailableShipService implements AvailableShipService {

  ships: ShipType[];

  constructor() {
    this.ships = this.initShips();
  }

  private initShips(): ShipType[] {
    const ships = [];
    ships.push(createGladiatorShipType(), createISDShipType());
    return ships;
  }

  public getShips(shipFilter: ShipFilter): ShipType[] {
    return this.ships.filter(ship => ship.faction.name === shipFilter.faction.name);
  }
}

export class ShipFilter {
  faction: Faction = null;

  constructor(faction: Faction) {
    this.faction = faction;
  }
}

export interface AvailableShipService {
  getShips(shipFilter: ShipFilter): ShipType[];
}

function createISDShipType() {
  const shipType = new ShipType(
    'ISD',
    new Faction('Imperial'),
    [
      new Ship(
        'ISD Class I',
        54,
        [
          new UpgradeType('Commander'),
          new UpgradeType('Officer')
        ]
      ),

      new Ship(
        'ISD Class II',
        59,
        [
          new UpgradeType('Commander'),
          new UpgradeType('Officer')
        ]
      )
    ]
  );
  return shipType;
}

function createGladiatorShipType() {
  const shipType = new ShipType(
    'Gladiator',
    new Faction('Imperial'),
    [
      new Ship(
        'Gladiator Class I',
        54,
        [
          new UpgradeType('Commander'),
          new UpgradeType('Officer')
        ]
      ),

      new Ship(
        'Gladiator Class II',
        59,
        [
          new UpgradeType('Commander'),
          new UpgradeType('Officer')
        ]
      )
    ]
  );
  return shipType;
}
