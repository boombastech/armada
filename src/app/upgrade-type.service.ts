import {Injectable} from '@angular/core';

@Injectable()
export class UpgradeTypeService {

  upgradeType: UpgradeType[];

  constructor() {
    this.upgradeType = [
      new UpgradeType('Officer'),
      new UpgradeType('Commander')
    ];
  }
}

export class UpgradeType {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
