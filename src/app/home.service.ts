import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators, RequiredValidator, DefaultValueAccessor} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  employee:Employee[]=[];
  
  UpdateOrCreate;
  constructor(private http:HttpClient,private router:Router) { }

  setEmployee(employee: any) {
    this.employee=employee;
  }
  
  setNeedsToCreateOrUpdate(updateOrCreate: string):Observable<any> {
this.UpdateOrCreate=updateOrCreate;
return this.UpdateOrCreate;
  }

  // InsertEmployee
  insertEmployee(value: Employee) :Observable<any>{
    return this.http.post("http://localhost:8080/Employee/createEmployee",value)
   }

  

  //getAllEmployee
  getAllEmployee():Observable<Employee[]> {
   return this.http.get<Employee[]>
   ("http://localhost:8080/Employee/getAllEmployee")
    }

   


    form:FormGroup=new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl(''),
      address:new FormControl(''),
      dob:new FormControl(''),
      city:new FormControl(''),
      mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),
      
    })

 
    deleteEmployee(value1: Employee):Observable<any> {
     confirm("sure u want to delete");
      return this.http.delete(`${"http://localhost:8080/Employee/delete"}/${value1.empid}`)
      }


       //UpdateEmployee

   updateEmployee(value:Employee):Observable<any>{
    return this.http.put(`${"http://localhost:8080/Employee/update"}/${value.empid}`,value)
   }

    setDefaultValue(){
this.form.setValue({

  firstName:'',
  lastName:'',
  address:'',
  dob:'',
  city:'',
  mobile:'',
})
    }

    populateForm(employee: Employee) {
            this.form.setValue({
              firstName:employee.firstName,
              lastName:employee.lastName,
              address:employee.address,
              dob:employee.dob,
              city:employee.city,
              mobile:employee.mobile,
            })
              }

}
