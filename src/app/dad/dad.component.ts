import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss']
})
export class DadComponent implements OnInit {
  dadData: string;
  @Output() dadSent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  dadGive(abc: string) {
    this.dadSent.emit(abc);
    console.log('dataDad: ', abc);
  }
}
