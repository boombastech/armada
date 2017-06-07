import { Injectable } from '@angular/core';
import {Squadron, SquadronType} from './fleet-builder/Fleet';
import {Faction} from './factions.service';

@Injectable()
export class SquadronService {

  private squadrons: SquadronType[];

  constructor() {
    this.squadrons = this.createSquadrons();
  }

  private createSquadrons(): SquadronType[] {
    const squadrons: SquadronType[] = [];

    squadrons.push(new SquadronType('TIE Advanced', new Faction('Imperial', 'imperial'), [
      new Squadron('Darth Vader', 21, true),
      new Squadron('TIE Advanced', 9, false)
    ]));

    return squadrons;
  }

}
