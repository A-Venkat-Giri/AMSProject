import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empno: number;
  ename:string;
  job:string;
  mgrno:number
  hiredate:string
  deptid:number


  error: string;
  constructor(private adminService:AdminService,private router: Router) { }

  ngOnInit() {
  }
  addemployee(employeeForm: NgForm) {
    
    console.log(employeeForm.value);
    console.log(this.empno)
    this.error=null;
    this.adminService.postEmployee(employeeForm.value).subscribe(data=> {
      console.log(data);
      if(data===null){
        this.error = "ID Already present, give new ID";
      }
      else{
        console.log(data);
        console.log("success");
        this.router.navigate(['./manageroperation'])
        }
      employeeForm.reset();
    }, err=> {
      console.log('test')
      console.log(err);
    })
  }

}
