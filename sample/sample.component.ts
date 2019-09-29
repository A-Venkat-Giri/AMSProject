import { Component } from '@angular/core';
@Component({
       selector:'app-sample',
      // template:`<h1>Hello Sample Component</h1>`,styles:[`h1 {background: red}`] 
   templateUrl:`./sample.component.html`,
   styleUrls:['./sample.component.css']   
})
export class SampleComponent
{
   flag=false;
   name="vinyas";
   imgURL='https://cdn.pixabay.com/photo/2018/12/24/22/19/camping-3893587__340.jpg';
headerclass='bg-success text-danger'
columnspan=2;
constructor(){
   setTimeout(() =>{
      this.flag=true;
   },5000);
}
}