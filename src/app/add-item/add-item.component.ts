import { Component,Output,EventEmitter } from '@angular/core';

import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
@Output() addEvent=new EventEmitter<string>();
addToList=new FormControl(''); 

  addItem(){
    if(this.addToList.value!==null){
      this.addEvent.emit(this.addToList.value);
    }
    this.addToList.reset();
  }
}
