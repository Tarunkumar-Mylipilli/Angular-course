import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereference-variable',
  templateUrl: './templatereference-variable.component.html',
  styleUrls: ['./templatereference-variable.component.css']
})
export class TemplatereferenceVariableComponent {


  data="";


  update(i:any){
    this.data=i;
  }
}
