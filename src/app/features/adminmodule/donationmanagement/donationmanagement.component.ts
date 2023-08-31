import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from 'src/app/core/service/admin.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';

@Component({
  selector: 'app-donationmanagement',
  templateUrl: './donationmanagement.component.html',
  styleUrls: ['./donationmanagement.component.scss']
})
export class DonationmanagementComponent implements OnInit {
  donationDialog: boolean;

  
  donationArry: any[];

  donationObj: any;

  submitted: boolean;

  organizationArr:any[];

  mode=[
    {value:"cash",name:"Cash"},
    {value:"cheque",name:"Cheque"},
  ]
  
  months = [
    { value: 'january', name: 'January' },
    { value: 'february', name: 'February' },
    { value: 'march', name: 'March' },
    { value: 'april', name: 'April' },
    { value: 'may', name: 'May' },
    { value: 'june', name: 'June' },
    { value: 'july', name: 'July' },
    { value: 'august', name: 'August' },
    { value: 'september', name: 'September' },
    { value: 'october', name: 'October' },
    { value: 'november', name: 'November' },
    { value: 'december', name: 'December' }
  ];
  currentYear = new Date().getFullYear();
  endYear = 2050;
  
  years:any[]=[];

  constructor(public global: GlobalService, public profile: ProfileService, public auth: AuthService,
    public admin:AdminService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getDonation();
    for (let year = this.currentYear; year <= this.endYear; year++) {
      this.years.push({ value: year, name: year });
    }
    this.getOrganization();
  }
  
  downloadPdf(id){
    this.admin.fnGetDonationPdf(id).subscribe((x:any)=>{
      const blob = new Blob([x], { type: 'application/pdf' });
      this.global.savePdf(blob,`Donation_${id}.pdf`)
    })
  }

   exportExcel() {
  this.global.exportExcel(this.donationArry,"Donation")
  }
  getOrganization() {
    this.admin.fnGetOrg().subscribe((x:any)=>{
      this.organizationArr = x.data.map( x=> ({name:x.name,id:x._id}))
    })
  }
  openNew() {
    this.donationObj ={};
    this.submitted = false;
    this.donationDialog = true;
  }
  delete(id) {
    this.admin.fnDeleteDonation(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getDonation();
      }
    })
  }
  edit(studobj) {
    this.donationObj = { ...studobj };
    this.donationDialog = true;
  }
  saveProduct() {
    this.submitted = true;
    this.donationObj.organizationDetail = this.donationObj.organizationID;
   if (this.donationObj._id) {
      this.admin.fnUpdateDonation(this.donationObj._id,this.donationObj).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('warn', x.message, x.status);
          this.getDonation();
        }
      })
    }
    else {
      this.donationObj.receiptNo = this.generateReceiptNumber();
        this.admin.fnPostDonation(this.donationObj).subscribe((x: any) => {
          if (x.success) {
            // this.global.showToast('success',x.message,x.status);
            this.getDonation();
          }
        })
    }
    this.donationDialog = false;
  }

  generateReceiptNumber() {
    var numbers = "0123456789";
    var receiptNumber = "";
    for (var i = 0; i < 8; i++) {
      receiptNumber += numbers[Math.floor(Math.random() * 10)];
    }
    return parseInt(receiptNumber);
  }
  
  hideDialog() {
    this.donationDialog = false;
    this.submitted = false;
  }
  getDonation() {
    this.admin.fnGetDonation().subscribe((users: any) => {
      this.donationArry = users.data;
    })
  }


}
