import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageDataService } from './local-storage-data.service';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  showConfirmationToastforUserDelete(obj){
    return    this.confirmationService.confirm({
      message:obj.message,
      header:obj.header,
      icon: obj.icon,
      accept: obj.deletefn()  });
  }
}
