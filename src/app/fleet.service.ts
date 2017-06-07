import {Injectable} from '@angular/core';

@Injectable()
export class FleetService {

  private fleet: Fleet;

  constructor() {
  }
}

class Fleet {
  constructor(public ships: Ship[] = [], public squadrons: Squadron[] = []) {
  }
}

class ArmadaThing {
  constructor(public name: string, public points: number, public faction: Faction = null, public unique: boolean = false) {
  }
}

class Ship extends ArmadaThing {
  constructor(name: string, points: number, faction: Faction = null, unique: boolean = false, public possibleUpgrades: Upgrade[] = []) {
    super(name, points, faction, unique);
  }
}

class Upgrade {
  constructor(public upgradeType: UpgradeType, public upgradeItem: UpgradeItem = null) {
  }
}

class UpgradeItem extends ArmadaThing {
  constructor(name: string, points: number, faction: Faction = null, unique: boolean = false) {
    super(name, points, faction, unique);
  }
}

class Squadron extends ArmadaThing {
  constructor(name: string, points: number, faction: Faction = null, unique: boolean = false) {
    super(name, points, faction, unique);
  }
}

enum Faction {
  imperial, rebel
}

enum UpgradeType {
  commander, officer
}
