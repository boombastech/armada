import {Injectable} from '@angular/core';
import {Fleet} from './Fleet';

@Injectable()
export class FleetValidationService {
  public uniques: string[];

  public validate(fleet: Fleet) {
    this.compileUniques(fleet);
    fleet.validation = new ValidationResults(this.validatePoints(fleet), this.validateSquadrons(fleet));
  }

  compileUniques(fleet: Fleet) {
    fleet.ships.filter(ship => ship.upgradeSlots.filter(upgradeSlot => upgradeSlot.chosenUpgrade && upgradeSlot.chosenUpgrade.unique)
      .map(upgradeSlot => upgradeSlot.chosenUpgrade.name)
      .forEach(upgradeName => this.uniques.push(upgradeName))
    );
  }


  validatePoints(fleet: Fleet): ValidationResult {
    if (fleet.points() <= fleet.fleetRules.maxPoints) {
      return new ValidationResult('pointsValidation', true, '');
    } else {
      return new ValidationResult('pointsValidation', false, 'Fleet points cost is too high');
    }
  }

  validateSquadrons(fleet: Fleet): ValidationResult {
    let squadronTotalCost: number;
    if (fleet.squadrons.length === 0) {
      squadronTotalCost = 0;
    } else {
      squadronTotalCost = fleet.squadrons.map(squadron => squadron.cost).reduce((a, b) => a + b);
    }

    if (squadronTotalCost >= (fleet.fleetRules.maxPoints / 3)) {
      return new ValidationResult('squadronValidation', false, 'Too many points spent on squadrons');
    } else {
      return new ValidationResult('', true, '');
    }
  }
}

export class ValidationResults {

  constructor(public pointsValidation: ValidationResult,
              public squadronValidation: ValidationResult) {
  }
}

export class ValidationResult {
  public name: string;
  public valid: boolean;
  public message: string;

  constructor(name: string, valid: boolean, message: string) {
    this.name = name;
    this.valid = valid;
    this.message = message;
  }
}
