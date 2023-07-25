import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
email:string;
  constructor(public auth:AuthService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.add({severity:'success', summary:"x.message", detail:"x.status",life:2000});
  }
ResetPassword(){
  this.auth.fnResetPassword(this.email).subscribe((x:any)=>{
    if(x.success){
      this.messageService.add({severity:'success', summary:x.message, detail:x.status,life:2000});
    }
  },(err)=>{

  })
}

}
