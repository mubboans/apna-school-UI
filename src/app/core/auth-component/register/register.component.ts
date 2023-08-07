import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LocalStorageDataService } from '../../service/local-storage-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm:FormGroup;
  showpass:boolean=false;
  showconfirmpass:boolean=false;
  passwordmatch:boolean;
  typearr=[
    {role:"Student",value:'student'},
    {role:"Teacher",value:'teacher'},
    {role:"Staff",value:'staff'}
  ]
  password:string;
  user:User;
  showSubmit:boolean = true;
  constructor(public fb:FormBuilder,public auth:AuthService,public route:Router,public localStorage:LocalStorageDataService) {
    this.regForm=fb.group({
      name:fb.control('',Validators.required),
      password:fb.control('',Validators.required),
      confirmpassword:fb.control('',Validators.required),
      email:fb.control('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      contact:fb.control('',Validators.required),
      DOB:fb.control('',Validators.required),
      role:fb.control('',Validators.required),
    });
    this.regForm.valueChanges.subscribe((x)=>{
      if(this.regForm.valid){
        this.showSubmit =false; 
        console.log(this.showSubmit);
      }
    })
   }

   onPasswordChange() {
    if(this.regForm.get('password').value && this.regForm.get('confirmpassword').value){
    if (this.regForm.get('password').value == this.regForm.get('confirmpassword').value) {
      this.passwordmatch=false;
    } else {
     this.passwordmatch=true;
    }
  }
  }

   get formControl(){
    this.onPasswordChange()
    // console.log(this.formControl,'formControl');
    return this.regForm.controls
   }
  ngOnInit(): void {
    this.user = new User();
    console.log(this.formControl.email);
    
  }
registerUser(){
  console.log(this.regForm.value,this.regForm.valid);
  this.auth.fnRegister(this.regForm.value).subscribe((x:any)=>{
      if(x.success){
        this.localStorage.setUserLocalData(x.data);
        this.localStorage.setToken(x.data.token)
          if(x.data.role == 'admin'){
            this.route.navigate(['/admin']);
          }
          else{
            this.route.navigate(['/general']);
          }
      }
  })
}
}
