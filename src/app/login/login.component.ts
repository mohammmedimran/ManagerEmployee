import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Alert } from 'selenium-webdriver';
import{Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name="";password="";
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit() {
  }
 
login(){
this.service.loginCheck(this.name,this.password);
}
}
