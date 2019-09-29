import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  userid: number;
  userpassword: String;


  error: string;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }


  printForm(loginForm: NgForm) {
    this.error = null;
    this.adminService.loginPage(loginForm.value).subscribe(login => {

      if (login === null) {
        console.log(login);
        this.error = "ID Already present, give new ID";
      }
      else{
      console.log(login);
      this.router.navigate(['./manageroperation'])
      }

    }
    )
  }
}
