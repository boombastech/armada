import {Upgrade} from './upgrade';
import {UpgradeType} from 'app/upgrade-type.service';
import {Faction} from '../factions.service';

export class UpgradeSlot {
  upgradeType: UpgradeType;
  chosenUpgrade: Upgrade;
  faction: Faction;

  constructor(upgradeType: UpgradeType) {
    this.upgradeType = upgradeType;
  }

  public assignUpgrade(upgrade: Upgrade) {
    this.chosenUpgrade = upgrade;
  }

  public removeUpgrade() {
    this.chosenUpgrade = null;
  }
}
