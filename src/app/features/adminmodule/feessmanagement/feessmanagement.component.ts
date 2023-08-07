import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/service/admin.service';
import { GlobalService } from 'src/app/core/service/global.service';
import * as FileSaver from 'file-saver';
import { ProfileService } from 'src/app/core/service/profile.service';
@Component({
  selector: 'app-feessmanagement',
  templateUrl: './feessmanagement.component.html',
  styleUrls: ['./feessmanagement.component.scss']
})
export class FeessmanagementComponent implements OnInit {

  constructor(public admin:AdminService,public global:GlobalService,public profile: ProfileService) { }

  feesStructureDialog: boolean;

  feesStructureArray: any[];

  feesStructureObj: any;

  selectedFeesstructure: any[];

  submitted: boolean;

  studentUsers:any[];

  feesPaymentDialog: boolean;

  feesPaymenteArray: any[];

  feesPaymentObj: any;

  ngOnInit(): void {
    this.getFeesStructure();
    this.getUser();
    this.getFeesPayement();
  }
  getFeesStructure(){
    this.admin.fnGetFeesStructure().subscribe((users: any) => {
      this.feesStructureArray = users.data;
    })
  }
  generateReceiptNumber() {
    const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    return parseInt(randomNumber.toString().padStart(8, '0'))
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.feesStructureArray);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "Fees_Structure");
    });
  }

  saveAsExcelFile(buffer: any, Category: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, Category + '_List_' + new Date().getTime()+ EXCEL_EXTENSION);
  }

  openNew() {
    this.feesStructureObj = {};
    this.submitted = false;
    this.feesStructureDialog = true;
  }
  deleteFeesStructure(id) {
    this.admin.fnDeleteFeesStructure(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getFeesStructure();
      }
    })
  }
  editFeesStructure(obj) {
    this.feesStructureObj = { ...obj };
    this.feesStructureDialog = true;
  }
  saveProductStructure() {
    this.submitted = true;

    if (this.feesStructureObj._id) {
      this.admin.fnUpdateFeesStructure(this.feesStructureObj._id,this.feesStructureObj).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('warn', x.message, x.status);
          this.getFeesStructure();
        }
      })
    }
    else {
        this.admin.fnPostFeesStructure(this.feesStructureObj).subscribe((x: any) => {
          if (x.success) {
            this.global.showToast('success', x.message, x.status);;
            this.getFeesStructure();
          }
        })
    }
    this.feesStructureDialog = false;
  }
  hideDialog() {
    this.feesStructureDialog = false;
    this.feesPaymentDialog=false;
    this.submitted = false;
  }





  saveProductPayment(){
    console.log(this.feesPaymentObj.studentName,'this.feesPaymentObj.name',this.feesPaymentObj);
    let id = this.studentUsers.filter(user=>user.name == this.feesPaymentObj.studentName).map(x=>x.id) 
    console.log(id);
    this.feesPaymentObj.studentID = id[0];
   this.feesPaymentObj.studentDetail=this.feesPaymentObj.studentID;
     this.submitted = true;

    if (this.feesPaymentObj._id) {
      
      this.admin.fnUpdateFeesPayment(this.feesPaymentObj._id,this.feesPaymentObj).subscribe((x: any) => {
        if (x.success) {
          this.global.showToast('warn', x.message, x.status);
          this.getFeesPayement();
        }
      })
    }
    else {
      this.feesPaymentObj.recieptNumber = this.generateReceiptNumber();
        this.admin.fnPostFeesPayment(this.feesPaymentObj).subscribe((x: any) => {
          if (x.success) {
            this.global.showToast('success', x.message, x.status);;
            this.getFeesPayement();
          }
        })
    }
    this.feesPaymentDialog = false;
  }

  getFeesPayement(){
    this.admin.fnGetFeesPayment().subscribe((users: any) => {
      this.feesPaymenteArray = users.data;
    })
  }

  editFeesPayment(obj){ 
   this.feesPaymentObj = { ...obj };
    this.feesPaymentDialog = true;
    console.log(this.feesPaymentObj);
    
  }
  deleteFeesPayment(id){
    this.admin.fnDeleteFeesPayment(id).subscribe((x: any) => {
      if (x.success) {
        this.global.showErrorToast(x.message, x.status);
        this.getFeesPayement()
      }
    })
  }
  openNewPayment(){
    this.feesPaymentObj = {};
    this.submitted = false;
    this.feesPaymentDialog = true;
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

  exportExcelPayment(){

    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.feesPaymenteArray);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFilePayment(excelBuffer, "Fees_Payment");
    });
  }

  saveAsExcelFilePayment(buffer: any, Category: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, Category + '_List_' + new Date().getTime()+ EXCEL_EXTENSION);
  }

}
