import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageDataService } from './local-storage-data.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  showSideBar:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false); 
  user:User = this.local.getUserLocalData();
  constructor(public local:LocalStorageDataService,private messageService: MessageService) { }
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
}
