import {Component, Input, OnInit} from '@angular/core';
import {UpgradeSlot} from '../models/UpgradeSlot';
import {UpgradeFilter, UpgradeService} from '../upgrade.service';
import {Upgrade} from '../models/Upgrades';

@Component({
  selector: 'app-chosen-ship-upgrade',
  templateUrl: './chosen-ship-upgrade.component.html',
  styleUrls: ['./chosen-ship-upgrade.component.css']
})
export class ChosenShipUpgradeComponent implements OnInit {
  private upgradeService: UpgradeService;

  public possibleUpgrades: Upgrade[];
  public showUpgrades = false;

  @Input()
  upgradeSlot: UpgradeSlot;

  constructor(upgradeService: UpgradeService) {
    this.upgradeService = upgradeService;
  }

  public closeUpgrade(event) {
    this.showUpgrades = false;
  }

  public togglePossibleUpgrades() {
    this.showUpgrades = !this.showUpgrades;
  }

  public ngOnInit() {
    console.log(this.upgradeSlot.upgradeType.name);
    this.possibleUpgrades = this.upgradeService.getUpgrade(new UpgradeFilter(this.upgradeSlot.upgradeType));
  }
}
