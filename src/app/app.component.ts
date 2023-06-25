import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childtoparent';
  data1='';
  
  data=10;
  updateChild()
  {
    this.data=Math.floor(Math.random()*10);
  }
   
   updateData(price:string)
  {
    this.data1=price;
    

   }
}
