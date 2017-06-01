import {Injectable} from '@angular/core';

@Injectable()
export class FactionsService {
  private factions: Faction[];

  constructor() {
    this.factions = [
      new Faction('Imperial', 'imperial'),
      new Faction('Rebel', 'rebel')
    ];
  }

  getFactions(): Faction[] {
    return this.factions;
  }

  getFaction(name: string): Faction {
    const filter = this.factions.filter(faction => faction.name === name);
    if (filter.length > 0) {
      return filter[0];
    } else {
      return null;
    }
  }
}

export class Faction {

  constructor(public displayName: string, public name: string) {
  }
}
