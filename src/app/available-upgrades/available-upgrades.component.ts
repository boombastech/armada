import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UpgradeFilter, UpgradeService} from '../upgrade.service';
import {Upgrade} from '../models/upgrade';
import {UpgradeSlot} from '../models/UpgradeSlot';
import {Faction} from '../factions.service';

@Component({
  selector: 'app-available-upgrades',
  templateUrl: './available-upgrades.component.html',
  styleUrls: ['./available-upgrades.component.css']
})
export class AvailableUpgradesComponent implements OnInit {
  private upgradeService: UpgradeService;

  @Input()
  public upgradeType: UpgradeSlot;

  @Output()
  public closeTrigger = new EventEmitter();
  public upgrades: Upgrade[];

  constructor(upgradeService: UpgradeService) {
    this.upgradeService = upgradeService;
  }

  public assignUpgrade(upgrade: Upgrade) {
    this.upgradeType.assignUpgrade(upgrade);
    this.closeTrigger.emit('phil');
  }

  ngOnInit() {
    this.upgrades = this.upgradeService.getUpgrade(new UpgradeFilter(this.upgradeType.upgradeType, new Faction('Imperial', 'imperial')));
  }
}
