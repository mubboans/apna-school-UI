import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataService {

  constructor(public route:Router) { }

  getUserLocalData(){
    localStorage.getItem('userdata');
  }
  setUserLocalData(data){

  }
  getToken(){
    return localStorage.getItem('token');
   }
   setToken(token){

   }
   isUserLogin(){
    return !!localStorage.getItem('userData');
  }
  logoutUser(){
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
