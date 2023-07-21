import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LocalStorageDataService } from '../service/local-storage-data.service';

@Injectable()
export class HttpHelperInterceptor implements HttpInterceptor {

  constructor(public localData:LocalStorageDataService) {}

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
      
      return throwError(error); 
    }));
  }
}
