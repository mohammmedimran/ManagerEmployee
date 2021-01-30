import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
flag;
 Users;
  constructor(private http:HttpClient,private router:Router) { }

  loginCheck(password,name){
    this.http.get(`${"http://localhost:8080/loginCheck"}/${name}/${password}`).subscribe((data)=>{
    if(data){
      this.router.navigate(["/Home"])
      }else{
        alert("PLEASE REGISTER");
      this.router.navigate(["/Register"])
      }
    })
}
register(employee){
  this.http.post("http://localhost:8080/Manager/createManager",employee).subscribe((data)=>{
console.log(data)
    })
   
}


form:FormGroup=new FormGroup({
  userName:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',Validators.required),
  
  
})


}

