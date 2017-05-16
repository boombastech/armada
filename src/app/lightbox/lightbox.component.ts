import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit, OnDestroy {
  @Output() private onConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() private onCancel: EventEmitter<any> = new EventEmitter<any>();
  @Input() public confirmText = 'Confirm';
  @Input() public cancelText = 'Cancel';
  @Input() public showTrigger: boolean;


  constructor() { }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }

  public confirm() {
    this.onConfirm.emit('cheese');
  }

  public cancel() {
    this.onCancel.emit('cheese');
  }
}
