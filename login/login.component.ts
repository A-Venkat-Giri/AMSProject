import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import{map} from 'rxjs/operators'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  mySubscription: Subscription;
users=[];
  constructor() { }

  ngOnInit() {
    this.mySubscription=interval(1000).pipe(map((data)=>{
      return data*100;
    })).subscribe(data =>{
      console.log(data);
    },error =>{
      console.log(error);
    },() =>{
      console.log("subscription is completed")
    }
    );
  }
  printForm(form:NgForm)
  {
    console.log(form.value);
    this.users.unshift(form.value);
    form.reset();
  }
  deleteUser(user){
    let index=this.users.indexOf(user);
    this.users.slice(index,1);

  }
  ngOnDestroy(){
    this.mySubscription.unsubscribe;
  }
  
}
