import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import{MatDialog,MatDialogConfig,MatDialogRef} from '@angular/material';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
insertedOrNot="";UpdateOrCreate="Employee";
  constructor(private service:HomeService,private mataClose:MatDialogRef<EmployeeFormComponent>) { }

  ngOnInit() {
this.UpdateOrCreate=this.service.UpdateOrCreate;

  }
onSubmit(){
 console.log(this.UpdateOrCreate);
 if(this.service.form.valid){
if(this.UpdateOrCreate=="Create Employee"){
 this.service.insertEmployee(this.service.form.value).subscribe((data)=>{
      this.insertedOrNot=data;
    });

    this.service.form.reset();
    this.service.setDefaultValue();
    alert("Created SuccessFully");

    
  }
    else{
      console.log(this.service.employee+"----------------console")
      this.service.updateEmployee(this.service.form.value).subscribe((data)=>{
       console.log(data)
      });
      this.service.form.reset();
      this.service.setDefaultValue();
      alert("updated Successfully");
    }
  }

  this.close();
}
close(){
  this.service.form.reset();
  this.service.setDefaultValue();
  this.mataClose.close();
}

DisplayUpdateOrCreate(){
  this.service.setNeedsToCreateOrUpdate(this.service.form.value).subscribe((data)=>{
this.UpdateOrCreate=data;
  });
}
}
