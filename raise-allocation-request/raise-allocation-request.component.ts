import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-raise-allocation-request',
  templateUrl: './raise-allocation-request.component.html',
  styleUrls: ['./raise-allocation-request.component.css']
})
export class RaiseAllocationRequestComponent implements OnInit {
  assetid:number;
  empno:Number;
  allocationdate:Date;
  releasedate:Date;
  quantity:Number;
  constructor(private adminService:AdminService,private router: Router) { }
  error: string;
  ngOnInit() {
  }

  raiseRequest(raiseForm: NgForm) {
    this.error=null;
    this.adminService.raiseAllocationRequest(raiseForm.value).subscribe(data=> {
      if(data===null){
        console.log(data);
        console.log("error");
        this.error = "ID Already present, give new ID";
      }
      else{
        console.log(data);
        console.log("success");
        this.router.navigate(['./manageroperation'])
        }
    })
  }

}
