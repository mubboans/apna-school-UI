import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageDataService } from './local-storage-data.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  showSideBar:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false); 
  user:User = this.local.getUserLocalData();
  constructor(public local:LocalStorageDataService) { }
  showSidebar(){
    this.showSideBar.next(true);
  }
  hideSidebar(){
    this.showSideBar.next(false);
  }
  handleError(error?:HttpErrorResponse){
    return throwError(error || "Server Errors")
  }
}
