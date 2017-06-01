import {Injectable} from '@angular/core';
import {Upgrade} from './models/upgrade';
import {UpgradeType} from './upgrade-type.service';
import {Faction} from './factions.service';

@Injectable()
export class UpgradeService {

  public upgrades: Upgrade[];

  constructor() {
    this.upgrades = [
      new Upgrade('Darth Vader', new UpgradeType('Commander'), 36, true, new Faction('Imperial', 'imperial')),
      new Upgrade('Cammander Sato', new UpgradeType('Commander'), 20, true, new Faction('Rebel', 'rebel')),
      new Upgrade('Director Isard', new UpgradeType('Officer'), 3, false, new Faction('Imperial', 'imperial')),
      new Upgrade('Intel Officer', new UpgradeType('Officer'), 5, false, null)
    ];
  }

  getUpgrade(upgradeFilter: UpgradeFilter): Upgrade[] {
    return this.upgrades.filter(upgrade => upgradeFilter.filter(upgrade));
  }
}

export class UpgradeFilter {
  constructor(public upgradeType: UpgradeType, public faction: Faction) {
  }

  filter(upgrade: Upgrade): boolean {
    if (this.upgradeType) {
      if (upgrade.upgradeType.name !== this.upgradeType.name) {
        return false;
      }
    }
    if (this.faction && upgrade.faction) {
      if (upgrade.faction.name !== this.faction.name) {
        return false;
      }
    }

    return true;
  }
}
