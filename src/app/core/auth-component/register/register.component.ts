import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

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
  constructor(public fb:FormBuilder) {
    this.regForm=fb.group({
      name:fb.control('',Validators.required),
      password:fb.control('',Validators.required),
      confirmpassword:fb.control('',Validators.required),
      email:fb.control('',Validators.required),
      contact:fb.control('',Validators.required),
      DOB:fb.control('',Validators.required),
      role:fb.control('',Validators.required),
    });
    this.regForm.valueChanges.subscribe((x)=>{
      if(this.regForm.valid){
        this.showSubmit =false; 
      }
      console.log(this.showSubmit);
      
    })
   }
get formControl(){
  return this.regForm.controls
}
  ngOnInit(): void {
    console.log(this.formControl);
    this.user = new User();
  }
registerUser(){
  console.log(this.regForm.value,this.regForm.valid);
}
}
