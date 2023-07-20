import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators'; 
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authurl = environment.localServer +'auth/';
  constructor(public http:HttpClient,public global:GlobalService) { }

fnLogin(identifier, password){
  const d = {
    identifier,
    password
  }
  return this.http.post(this.authurl+'login',d).pipe(map((x:any)=>{
    return x;
  }),catchError(this.global.handleError)
  )
}
}
