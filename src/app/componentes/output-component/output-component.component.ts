import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.scss']
})
export class OutputComponentComponent implements OnInit {
@Output() emitMessage = new EventEmitter<string>();
message = '';
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.emitMessage.emit(this.message);
  }

}
