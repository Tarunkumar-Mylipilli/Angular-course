import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HeaderComponent) header:any
  title = 'MyApp';

  data1="";

  test(){
    this.data1= this.header.viewchild
  }
}
