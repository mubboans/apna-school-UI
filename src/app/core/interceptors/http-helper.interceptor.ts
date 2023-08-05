import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { GlobalService } from '../service/global.service';

@Injectable()
export class HttpHelperInterceptor implements HttpInterceptor {

  constructor(public mess:MessageService,public global:GlobalService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.global.showLoader =true;
    const user = this.global.user;
    if(user && user.token){
      request=request.clone({     
        setHeaders: { Authorization: `Bearer ${user.token}` }
       });
    }
    return next.handle(request).pipe(finalize(()=>{
      this.global.showLoader = false;
    }),
    catchError((error)=>{
      // if(error instanceof HttpErrorResponse && error.status == 401 && (!request.url.includes('login'))|| !request.url.includes('register')  ){
        if(error instanceof HttpErrorResponse && error.status){
          this.global.showToast('error',error.error.message,error.error.status)
        // this.mess.add({severity:'error', summary:error.error.message, detail:error.error.status,life:2000});    
      }
      return throwError(error); 
    }));
  }
}
