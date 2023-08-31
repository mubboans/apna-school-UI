import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/service/admin.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  orgDialog: boolean;

  orgArr: any[];

  orgObj: any;

  submitted: boolean;

  constructor(public global: GlobalService, public profile: ProfileService, public auth: AuthService,
    public admin:AdminService) { }

  ngOnInit(): void {
    this.getOrg();
  }

   exportExcel() {
  this.global.exportExcel(this.orgArr,"Organization")
  }

  openNew() {
    this.orgObj ={};
    this.orgObj.address = {};
    this.submitted = false;
    this.orgDialog = true;
  }
  deleteAccount(id) {
    this.admin.fnDeleteOrg(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getOrg();
      }
    })
  }
  edit(studobj) {
    this.orgObj = { ...studobj };
    this.orgDialog = true;
  }
  saveProduct() {
    this.submitted = true;
    if (this.orgObj._id) {
      this.admin.fnUpdateOrg(this.orgObj._id,this.orgObj).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('success', x.message, x.status);
          this.getOrg();
        }
      })
    }
    else {
      this.orgObj.organizationDetail = this.orgObj.organizationID;
        this.admin.fnPostOrg(this.orgObj).subscribe((x: any) => {
          if (x.success) {
            this.global.showToast('success',x.message,x.status);
            this.getOrg();
          }
        })
    }
    this.orgDialog = false;
  }
  hideDialog() {
    this.orgDialog = false;
    this.submitted = false;
  }
  getOrg() {
    this.admin.fnGetOrg().subscribe((x: any) => {
      this.orgArr = x.data;
    })
  }

}
