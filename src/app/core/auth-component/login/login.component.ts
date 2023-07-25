import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LocalStorageDataService } from '../../service/local-storage-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	responsiveOptions:any = [
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
identifier:string;
password:any;
imgUrl:any=[
  {head:"Unlimited Inbox",url:"../../../../assets/images/live_collaboration.png",description:"Unlimited Inbox with data security"},
  {head:'Data Security',url:'../../../../assets/images/security.svg',description:"Data security with Unlimited Inbox"},
  {head:"Cloud Backup",url:'../../../../assets/images/subcribe.png',description:"Cloud Backup on the Internet"}
]
submitted: boolean;
  constructor(public auth:AuthService,private messageService: MessageService,public route:Router,public localStorage:LocalStorageDataService) { }

  ngOnInit(): void {
  }
fnLogin(){

  this.submitted=true
  this.auth.fnLogin(this.identifier,this.password).subscribe((x:any)=>{
    if(x.success){
      let d = x.data;
      console.log(d);
      this.messageService.add({severity:'success', summary:'Verify User', detail:'Successfull Login',life:2000});
      setTimeout(()=>{
        this.localStorage.setUserLocalData(x.data);
        this.localStorage.setToken(d.token)
        this.route.navigate(['/dashboard']);
      },1000) 
    }
  })
  console.log(this.identifier,this.password);
  
}
}
