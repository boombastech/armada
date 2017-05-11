import {UpgradeType} from '../upgrade-type.service';

export class Ship {
  name: String;
  cost: number;
  upgradeSlots: UpgradeType[];

  constructor(name: String, cost: number, upgradeTypes: UpgradeType[]) {
    this.name = name;
    this.cost = cost;
    this.upgradeSlots = upgradeTypes;
  }
}
