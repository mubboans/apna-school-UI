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
import { LocalStorageDataService } from '../service/local-storage-data.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class HttpHelperInterceptor implements HttpInterceptor {

  constructor(public localData:LocalStorageDataService,public mess:MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localData.getToken();
    if(token){
      request=request.clone({     
        setHeaders: { Authorization: `Bearer ${token}` }
       });
    }
    return next.handle(request).pipe(finalize(()=>{

    }),
    catchError((error)=>{
      if(error instanceof HttpErrorResponse && error.status == 401 && (!request.url.includes('login'))|| !request.url.includes('register')  ){
        this.mess.add({severity:'error', summary:error.error.message, detail:error.error.status,life:2000});    
      }
      return throwError(error); 
    }));
  }
}
