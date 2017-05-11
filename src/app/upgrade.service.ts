import {Injectable} from '@angular/core';
import {Upgrade} from './models/Upgrades';
import {UpgradeType} from './upgrade-type.service';
import {Faction} from './factions.service';

@Injectable()
export class UpgradeService {

  private upgrades: Upgrade[];

  constructor() {
    this.upgrades = [
      new Upgrade('Darth Vader', new UpgradeType('Commander'), 36, true, new Faction('Imperial')),
      new Upgrade('Director Isard', new UpgradeType('Officer'), 3, true, new Faction('Imperial'))
    ];
  }

  getUpgrade(upgradeFilter: UpgradeFilter): Upgrade[] {
    return this.upgrades.filter(upgrade => upgrade.upgradeType.name === upgradeFilter.upgradeType.name);
  }
}

export class UpgradeFilter {
  upgradeType: UpgradeType;

  constructor(upgradeType: UpgradeType) {
    this.upgradeType = upgradeType;
  }
}
