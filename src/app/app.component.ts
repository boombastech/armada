import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  trigger = true;

  public confirmTrigger(event: any) {
    this.trigger = false;
  }
}
