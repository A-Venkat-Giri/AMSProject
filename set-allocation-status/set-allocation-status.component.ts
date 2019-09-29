import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-set-allocation-status',
  templateUrl: './set-allocation-status.component.html',
  styleUrls: ['./set-allocation-status.component.css']
})
export class SetAllocationStatusComponent implements OnInit {
  allocationid:number;
  status:string
  constructor(private adminService:AdminService,private router: Router) { }
  error: string;

  ngOnInit() {
  }
  setAllocationStatus(setstatus : NgForm)
  {
    console.log(setstatus.value);
    this.error=null;
    this.adminService.setAllocationStatus(setstatus.value).subscribe(data=> {
      if(data===null){
        console.log(data);
        console.log("error");
        this.error = "ID Already present, give new ID";
      }
      else{
        console.log(data);
        console.log("success");
        this.router.navigate(['./adminoperation'])
        }
    } , err => {
      console.log(err);
    } , () => {
      console.log("status got successfully")
    })
  }
 
}
