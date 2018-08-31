import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LPcollection';

  displayList: string[] = []; // ok

  newAlbum(item: string) {

    console.log ('Listed album:', item );
    this.displayList.push(item);
  }

  itemDeleted(item: string) {
    console.log('deletedItem:', item);
  }
}
