import { Component, OnInit } from '@angular/core';

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
usermailorname:string;
password:any;
imgUrl:any=[
  {head:"Unlimited Inbox",url:"../../../../assets/images/live_collaboration.png",description:"Unlimited Inbox with data security"},
  {head:'Data Security',url:'../../../../assets/images/security.svg',description:"Data security with Unlimited Inbox"},
  {head:"Cloud Backup",url:'../../../../assets/images/subcribe.png',description:"Cloud Backup on the Internet"}
]
submitted: boolean;
  constructor() { }

  ngOnInit(): void {
  }
fnLogin(){

  this.submitted=true
  console.log(this.usermailorname,this.password);
  
}
}
