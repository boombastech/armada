import {Ship} from './Ship';
import {Faction} from '../factions.service';

export class List {
  name: String;
  faction: Faction;
  ships: Ship[];
  pointsTotal: number;
}
