import {Component, OnInit} from '@angular/core';
import {Faction, FactionsService} from '../factions.service';

@Component({
  selector: 'app-faction-selector',
  templateUrl: './faction-selector.component.html',
  styleUrls: ['./faction-selector.component.css']
})
export class FactionSelectorComponent implements OnInit {
  private factions: Faction[];
  private factionService: FactionsService;

  constructor(factionService: FactionsService) {
    this.factionService = factionService;
  }

  ngOnInit() {
    this.factions = this.factionService.getFactions();
  }
}
