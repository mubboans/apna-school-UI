import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { User } from 'src/app/core/models/user.model';
import { AdminService } from 'src/app/core/service/admin.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalService } from 'src/app/core/service/global.service';
import { ProfileService } from 'src/app/core/service/profile.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-salarymanagement',
  templateUrl: './salarymanagement.component.html',
  styleUrls: ['./salarymanagement.component.scss']
})
export class SalarymanagementComponent implements OnInit {

  salaryDialog: boolean;
  salaryModal:boolean;
  salaryShowObj:any;
  salaryArr: any[];

  salaryObj: any;

  submitted: boolean;

  studentUsers:any[];
  organizationArr:any[];

  
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
  
  
  
  
  @ViewChild('pdfTable') pdfTable: ElementRef;

  constructor(public global: GlobalService, public profile: ProfileService, public auth: AuthService,
    public admin:AdminService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getSalary();
    this.getUser();
    for (let year = this.currentYear; year <= this.endYear; year++) {
      this.years.push({ value: year, name: year });
    }
    this.getOrganization();
  }
  
  downloadPdf(id){
    this.admin.fnGetSalaryPdf(id).subscribe((x:any)=>{
      const blob = new Blob([x], { type: 'application/pdf' });
      this.global.savePdf(blob,`salary_${id}.pdf`)
    // FileSaver.default (blob, `salary_${id}.pdf`);
    })
  }

   exportExcel() {
  this.global.exportExcel(this.salaryArr,"Salary")
  }
  getOrganization() {
    this.admin.fnGetOrg().subscribe((x:any)=>{
      this.organizationArr = x.data.map( x=> ({name:x.name,id:x._id}))
    })
  }
  openNew() {
    this.salaryObj ={};
    this.submitted = false;
    this.salaryDialog = true;
  }
  deleteAccount(id) {
    this.admin.fnDeleteSalary(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getSalary();
      }
    })
  }
  edit(studobj) {
    this.salaryObj = { ...studobj };
    this.salaryDialog = true;
  }
  saveProduct() {
    this.submitted = true;
    // let id = this.studentUsers.filter(user=>user.id == this.salaryObj.userId).map(x=>x.id) 
    // console.log(id);
    this.salaryObj.userDetail = this.salaryObj.userId;
    this.salaryObj.grossEarning = this.salaryObj.basicAmount+this.salaryObj.houseRent+
    this.salaryObj.transportAllowance+this.salaryObj.mdeical+this.salaryObj.fixedAllowance;
    this.salaryObj.organizationDetail = this.salaryObj.organizationID
    this.salaryObj.deductionAmount = this.salaryObj.professionalTax + this.salaryObj.otherTax ;
    this.salaryObj.totalNetAmount = this.salaryObj.grossEarning-this.salaryObj.deductionAmount
  //  this.feesPaymentObj.studentDetail=this.feesPaymentObj.studentID;
    if (this.salaryObj._id) {

      this.admin.fnUpdateSalary(this.salaryObj._id,this.salaryObj).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('warn', x.message, x.status);
          this.getSalary();
        }
      })
    }
    else {
     
   

        this.admin.fnPostSalary(this.salaryObj).subscribe((x: any) => {
          if (x.success) {
            // this.global.showToast('success',x.message,x.status);
            this.getSalary();
          }
        })
    }
    this.salaryDialog = false;
  }
  hideDialog() {
    this.salaryDialog = false;
    this.submitted = false;
  }
  getSalary() {
    this.admin.fnGetSalary().subscribe((users: any) => {
      this.salaryArr = users.data;
    })
  }
  getUser() {
    this.profile.fnGetAllUser().subscribe((users: any) => {
      this.studentUsers = users.data.filter(user => user.role === 'student')
      .map(student => ({
        id: student._id,
        // name: `${student.name}_${student.contact}`,
        name:student.name
      }));
      
    })
  }
}
