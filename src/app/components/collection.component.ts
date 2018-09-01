import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

interface AlbumComp {
  albumName: string;
  artistName: string;
  rating: number;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Output()
  ToDisplay = new EventEmitter<string[]>();

  // ok
  albumList(form: NgForm) { // fires the under @Output ToDisplay
// conditions

    this.ToDisplay.next(form.value);
    form.resetForm();
  console.log('form:', this.albumList);
  }
  constructor() {

  }

  ngOnInit() {
  }

  // formatLabel(value: number | null) {
  //   if (!value) {
  //     return 0;
  //   }

  //   if (value >= 10) {
  //     return Math.round(value / 10);
  //   }

  //   return value;
  // }
}
