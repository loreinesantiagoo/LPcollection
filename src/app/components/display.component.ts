import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input()
  display: string;

  deleteItem = new EventEmitter<string[]>(); // ok

  constructor() { }
// called when component is created
// something has to be fired here using next
  ngOnInit() {
  }

}
