import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  // @Input()  data=""

@Output() child = new EventEmitter();

message = "This is Output"

updatemessage(){
  this.child.emit(this.message)
}
}
