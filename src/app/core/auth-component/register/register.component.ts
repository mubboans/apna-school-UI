import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    {role:"Student",value:1},
    {role:"Teacher",value:2}
  ]
  password:string;
  user:User;
  constructor() { }

  ngOnInit(): void {
    this.user = new User();
  }

}
