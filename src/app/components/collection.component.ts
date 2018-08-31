import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Label {
  name: string;
  count: number;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Output()
  itemInput = new EventEmitter<string>();

  @Input()
  newAlbumList: string; // ok

  newAlbum: EventEmitter<string>;

  constructor() { }

  ngOnInit() {
  } // something to be fired from here
  // this.itemInput.next('hello');

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 10) {
      return Math.round(value / 10);
    }

    return value;
  }

  processAlbum() {
    console.log('processing task:', this.abc.value);
    this.newAlbumList.next(this.newAlbum);
    // this.newAlbumList.resetForm();
  }

}
// console.log('processed:', itemInput: string);