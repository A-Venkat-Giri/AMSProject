import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users=[
    {
      name:'venkat',
      company:'capgemini',
      salery: 40000,
      degree:'ece'
    },
    {
      name:'venkat',
      company:'capgemini',
      salery: 40000,
      degree:'ece'
    },
    {
      name:'venkat',
      company:'capgemini',
      salery: 40000,
      degree:'ece'
    },
    {
      name:'venkat',
      company:'capgemini',
      salery: 40000,
      degree:'ece'
    }
  ]
printService()
{
  console.log("method from the service is called");
}
  constructor() { }
}
