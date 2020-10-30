import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() childSent: EventEmitter<string> = new EventEmitter<string>();
  test = 'Success';
  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.childSent.emit(this.test);
  }

}
