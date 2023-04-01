import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GroceryListAngular';
  items:any[];

 constructor(){
  this.items=[];
 }
  
  addToList(itemName:string){
      const item=itemName.charAt(0).toUpperCase()
      + itemName.slice(1);
      this.items.push({name:item});
     
  }

  remove(item:string){
    
    for(var i = 0;i < this.items.length; i++){
    	if(item == this.items[i].name){
    		this.items.splice(i,1);
    		break;
    	}
    }
   
  }
}
  