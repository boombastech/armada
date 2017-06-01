import {Faction} from '../factions.service';
import {UpgradeType} from '../upgrade-type.service';

export class Thing {
  name: string;
  unique: boolean;

  constructor(name: string, unique: boolean) {
    this.name = name;
    this.unique = unique;
  }
}

export class Upgrade extends Thing {
  upgradeType: UpgradeType;
  cost: number;
  faction: Faction;

  constructor(name: string, upgradeType: UpgradeType, cost: number, unique: boolean, faction: Faction) {
    super(name, unique);
    this.upgradeType = upgradeType;
    this.cost = cost;
    this.faction = faction;
  }
}

