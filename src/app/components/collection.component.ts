import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

// interface Label {
//   name: string;
//   count: number;
// }

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Output()
  newAlbumList = new EventEmitter<string[]>(); // ok
  reset = NgForm;

  @Input()
  itemInput: string[]; // ok

  constructor() { }

  ngOnInit() {
    this.newAlbumList.next();
    // this.itemInput.resetForm();
  } // something to be fired from here
  // resetForm: string;

  // formatLabel(value: number | null) {
  //   if (!value) {
  //     return 0;
  //   }

  //   if (value >= 10) {
  //     return Math.round(value / 10);
  //   }

  //   return value;
  // }

  processAlbum() {
    // console.log('processing album:', this.newAlbumList.value);
    // this.newAlbumList.next(this.itemInput);

  }

}
// console.log('processed:', itemInput: string);
