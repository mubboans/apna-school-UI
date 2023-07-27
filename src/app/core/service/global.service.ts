import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  showSideBar:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false); ;
  constructor() { }
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
