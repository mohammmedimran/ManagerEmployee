import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName;
  lastName;
  email;
  password;
  address;
  dob;
  company;
  constructor(private service:LoginService) { }

  ngOnInit() {
  }
register(){
  var employee={
  firstName:this.firstName,
 lastName:this.lastName,
email:this.email,
password:this.password,
address:this.address,
dob:this.dob,
company:this.company
  }
this.service.register(employee);
}
 
}
