import {Ship} from './Ship';
import {Faction} from '../factions.service';
export class ShipType {
  name: String;
  faction: Faction;
  ships: Ship[];

  constructor(name: String, faction: Faction, ships: Ship[]) {
    this.name = name;
    this.faction = faction;
    this.ships = ships;
  }
}
