import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
flag=false;
constructor( private userService: UsersService)
{
  var name='ramesh';
  setInterval(()=>
  {
    this.flag=!this.flag;
  },1000)
}
  users=[
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    },
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    },
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    },
    {
      name:'vinyas',
      company:'capgemini',
      salery: 40000,
      degree:'cse'
    }
  ]

  ngOnInit()
  {
    this.userService.printService();
  }

}
