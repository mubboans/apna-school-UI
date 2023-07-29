import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators'; 
import { GlobalService } from './global.service';
import { MessageService } from 'primeng/api';
import { LocalStorageDataService } from './local-storage-data.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authurl = environment.localServer +'auth/';
  constructor(public http:HttpClient,public global:GlobalService,private messageService: MessageService,
    public localStorage:LocalStorageDataService,public route:Router) { }

fnLogin(identifier, password){
  const d = {
    identifier,
    password
  }
  return this.http.post(this.authurl+'login',d).pipe(map((x:any)=>{
    this.global.user = x.data;
    return x;
  }),catchError(this.global.handleError)
  )
}
fnRegister(data){
  return this.http.post(this.authurl+'register',data).pipe(map((x:any)=>{
    if(x.success){
      let d = x.data;
      this.global.user = x.data;
      console.log(d);
      this.messageService.add({severity:'success', summary:'Verify User', detail:'Successfull Login',life:2000});
      // setTimeout(()=>{
        this.localStorage.setUserLocalData(x.data);
        this.localStorage.setToken(d.token)
     
      // },1000) 
    }
    return x;
  }
  ),catchError(this.global.handleError))
}
fnChangePassword(obj){
  return this.http.post(this.authurl+'forgot-password',obj).pipe(
    map((x:any)=>{
      return x;
    }),
    catchError(this.global.handleError)
  )
}
fnResetPassword(email){
  const d ={
    email: email
  }
  return this.http.post(this.authurl+'forgot-password-link',d).pipe(map((x:any)=>{}),
  catchError(this.global.handleError))
}
}
