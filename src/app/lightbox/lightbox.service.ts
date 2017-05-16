import {Injectable} from '@angular/core';

@Injectable()
export class LightboxService {
  private modal: any;
  private dialog: any;

  constructor() {
  }

  public setModal() {
    if (this.modal === null) {
      // we can set it to something new
      // and call something to render it
    } else {
      // return some error message as a modal is already displayed
    }
  }

  public setDialog() {
    if (this.dialog === null) {
      // we can set it to something new
      // and call something to render it
    } else {
      // return some error message as a modal is already displayed
    }
  }
}
