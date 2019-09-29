import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ManagerOperationsComponent } from './manager-operations/manager-operations.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RaiseAllocationRequestComponent } from './raise-allocation-request/raise-allocation-request.component';
import { ViewAllocationStatusComponent } from './view-allocation-status/view-allocation-status.component';
import { LogoutComponent } from './logout/logout.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { RemoveAssetComponent } from './remove-asset/remove-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { SetAllocationStatusComponent } from './set-allocation-status/set-allocation-status.component';
import { ViewAllAssetsComponent } from './view-all-assets/view-all-assets.component';
import { ViewAllAllocationRequestsComponent } from './view-all-allocation-requests/view-all-allocation-requests.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AddAssetPipe } from './add-asset.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserTypeComponent,
    AdminLoginComponent,
    ManagerLoginComponent,
    ManagerOperationsComponent,
    AdminOperationsComponent,
    AddEmployeeComponent,
    RaiseAllocationRequestComponent,
    ViewAllocationStatusComponent,
    LogoutComponent,
    AddAssetComponent,
    RemoveAssetComponent,
    UpdateAssetComponent,
    SetAllocationStatusComponent,
    ViewAllAssetsComponent,
    ViewAllAllocationRequestsComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddAssetPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'usertype' ,component:UserTypeComponent},
      {path:'managerlogin' ,component:ManagerLoginComponent},
      {path:'adminlogin' ,component:AdminLoginComponent},
      {path:'manageroperation',component:ManagerOperationsComponent},
      {path:'adminoperation',component:AdminOperationsComponent},
      {path:'addemployee',component:AddEmployeeComponent},
      {path:'raiseallocationrequest',component:RaiseAllocationRequestComponent},
      {path:'viewallocationstatus',component:ViewAllocationStatusComponent},
      {path:'logout',component:LogoutComponent},
      {path:'addasset',component:AddAssetComponent},
      {path:'removeasset',component:RemoveAssetComponent},
      {path:'updateasset',component:UpdateAssetComponent},
      {path:'setallocationstatus',component:SetAllocationStatusComponent},
      {path:'viewallallocationrequests',component:ViewAllAllocationRequestsComponent},
      {path:'viewallassets',component:ViewAllAssetsComponent},
      {path:'**', component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
