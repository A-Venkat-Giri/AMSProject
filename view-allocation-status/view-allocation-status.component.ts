import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-allocation-status',
  templateUrl: './view-allocation-status.component.html',
  styleUrls: ['./view-allocation-status.component.css']
})
export class ViewAllocationStatusComponent implements OnInit {
  allocationid:number;
  constructor(private adminService:AdminService,private router: Router) { }
  // redirect(form: NgForm)
  // {
  //   localStorage.setItem('token',"true");
  //   this.router.navigateByUrl(`/manageroperation`)
  //   this.adminService.ch
  // }
  error: string;
  isApproved : any;
  ngOnInit() {
   
  }
  statusView(statusForm : NgForm)
   {
    this.error=null;
    this.adminService.viewStatus(statusForm.value).subscribe(data=> {
      console.log(data);
      this.isApproved = data;
      setTimeout(() => {
        this.router.navigateByUrl('/manageroperation')
      }, 2000);
        // if(data === "approve"){
        //   this.isApproved = data;
        // }else{
        //   this.isApproved = false;
        // }
      // if(data===null){
      //   console.log(data);
      //   console.log("error");
      //   this.error = "ID Already present, give new ID";
      // }
      // else{
      //   console.log(data);
      //   console.log("success");
      //   this.router.navigate(['./manageroperation'])
      //   }
    }, err => {
      console.log(err);
    },  () => {
      
      console.log("data got successfully");
    })
  }

}
