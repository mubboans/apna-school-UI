import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageDataService } from './local-storage-data.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  showSideBar:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false); 
  user:User = this.local.getUserLocalData();
  showLoader:boolean;
  constructor(public local:LocalStorageDataService,
    public messageService: MessageService,public confirmationService: ConfirmationService)
   { }
  showSidebar(){
    this.showSideBar.next(true);
  }
  hideSidebar(){
    this.showSideBar.next(false);
  }
  handleError(error?:HttpErrorResponse){
    return throwError(error || "Server Errors")
  }
  showToast(severity,summary,detail){
   return  this.messageService.add({severity:severity, summary:summary, detail:detail,life:2000}); 
  }
  showErrorToast(summary,detail){
    return  this.messageService.add({severity:'error', summary:summary, detail:detail,life:5000}); 
  }
  showConfirmationToastforUserDelete(obj){
    return    this.confirmationService.confirm({
      message:obj.message,
      header:obj.header,
      icon: obj.icon,
      accept:()=>{obj.deletefn()}});
  }
  exportExcel(array,filename) {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(array);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, filename);
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
}
