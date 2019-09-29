import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-allocation-requests',
  templateUrl: './view-all-allocation-requests.component.html',
  styleUrls: ['./view-all-allocation-requests.component.css']
})
export class ViewAllAllocationRequestsComponent implements OnInit {
 selectviewallallocation = {
    allocationid : null,
    assetid : null,
    empno: null,
    allocationdate : null,
    releasedate : null,
    quantity:null
  }

  constructor( private adminservice:AdminService,private router: Router) { }

  ngOnInit() {
    this.adminservice.getAllocation();
    setTimeout(() => {
      this.router.navigateByUrl('/adminoperation')
    }, 30000)
  }
  selectViewAllAllocation(viewallallocation){
    console.log(viewallallocation);
    this.selectviewallallocation=viewallallocation;

    
  }
}
