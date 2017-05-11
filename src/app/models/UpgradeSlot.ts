import {Upgrade} from './Upgrades';
import {UpgradeType} from 'app/upgrade-type.service';

export class UpgradeSlot {
  upgradeType: UpgradeType;
  chosenUpgrade: Upgrade;

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
