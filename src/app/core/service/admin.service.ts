import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl = environment.localServer;
  feesStructureUrl = this.adminUrl + 'fees/structure/';
  feesPaymentUrl = this.adminUrl + 'fees/payment/';
  salaryUrl = this.adminUrl + 'salary/';
  constructor(public http:HttpClient,public global:GlobalService) { }
  fnGetCardDetail(startdate,enddate){
    return this.http.get(`${this.adminUrl}dashboard/card?startdate=${startdate}&enddate=${enddate}`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnGetFeesStructure(){
    return this.http.get(`${this.feesStructureUrl}get`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnPostFeesStructure(data){
    return this.http.post(`${this.feesStructureUrl}add`,data).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnUpdateFeesStructure(id,data){
    return this.http.put(`${this.feesStructureUrl}update:${id}`,data).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnDeleteFeesStructure(id){
    return this.http.delete(`${this.feesStructureUrl}delete:${id}`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }


  fnGetFeesPayment(){
    return this.http.get(`${this.feesPaymentUrl}get`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnPostFeesPayment(data){
    return this.http.post(`${this.feesPaymentUrl}add`,data).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnUpdateFeesPayment(id,data){
    return this.http.put(`${this.feesPaymentUrl}update:${id}`,data).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnDeleteFeesPayment(id){
    return this.http.delete(`${this.feesPaymentUrl}delete:${id}`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }



  fnGetSalary(){
    return this.http.get(`${this.salaryUrl}get`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnPostSalary(data){
    return this.http.post(`${this.salaryUrl}add`,data).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnUpdateSalary(id,data){
    return this.http.put(`${this.salaryUrl}update:${id}`,data).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
  fnDeleteSalary(id){
    return this.http.delete(`${this.salaryUrl}delete:${id}`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
}
