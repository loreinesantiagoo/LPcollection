import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LPcollection';

  albumList: string[] = [];

  displayed(item: string) {
    console.log('listed:', item);
    this.albumList.push(item);
  }
}
