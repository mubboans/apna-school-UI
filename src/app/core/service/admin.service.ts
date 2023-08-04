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
  constructor(public http:HttpClient,public global:GlobalService) { }
  fnGetCardDetail(startdate,enddate){
    return this.http.get(`${this.adminUrl}dashboard/card?startdate=${startdate}&enddate=${enddate}`).pipe(
      map((x)=>{
        return x;
      }),
      catchError(this.global.handleError)
    )
  }
}
