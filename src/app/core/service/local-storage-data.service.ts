import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataService {

  constructor(public route:Router) { }

  getUserLocalData(){
   const d= localStorage.getItem('userdata');
   return d ? JSON.parse(d):[];
  }
  setUserLocalData(data){
    localStorage.setItem('userdata',JSON.stringify(data))
  }
  getToken(){
    return localStorage.getItem('token');
   }
  setToken(token){
    localStorage.setItem('token',JSON.stringify(token))
  }
  isUserLogin(){
    return !!localStorage.getItem('userdata');
  }
  logoutUser(){
    localStorage.removeItem('userdata');
    localStorage.removeItem('token');
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
