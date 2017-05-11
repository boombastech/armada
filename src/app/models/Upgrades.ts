import {Faction} from '../factions.service';
import {UpgradeType} from '../upgrade-type.service';

export class Upgrade {
  name: String;
  upgradeType: UpgradeType;
  cost: number;
  unique: boolean;
  faction: Faction;


  constructor(name: String, upgradeType: UpgradeType, cost: number, unique: boolean, faction: Faction) {
    this.name = name;
    this.upgradeType = upgradeType;
    this.cost = cost;
    this.unique = unique;
    this.faction = faction;
  }
}
