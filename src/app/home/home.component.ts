import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { Employee } from '../employee';
import { HomeService } from '../home.service';
import { MatTableDataSource } from '@angular/material/table';
import{MatDialog,MatDialogConfig} from '@angular/material';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
// import{MatDialogRef} from '@angul'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UpdateOrCreate;
  employee:Employee[]=[];
  displayedColumns: string[] = ['address', 'city', 'dob', 'empid','firstName','lastName','mobile','action'];
   dataSource = new MatTableDataSource<Employee>();
  constructor(private service:HomeService,private dialog:MatDialog) { }
ngOnInit() {
this.service.getAllEmployee().subscribe(
data=>this.dataSource = new MatTableDataSource(data));
  }
onCreate(){
  this.service.setNeedsToCreateOrUpdate("Create Employee")
    this.service.setDefaultValue();
   const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EmployeeFormComponent,dialogConfig).afterClosed().subscribe(data=>{
    this.service.getAllEmployee().subscribe(
      data=>this.dataSource = new MatTableDataSource(data));
   });
 }
 
   onEdit(employee){
     
     this.service.setEmployee(employee)
     
    this.service.setNeedsToCreateOrUpdate("Update Employee")
 this.service.populateForm(employee);
const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="70%";
   this.dialog.open(EmployeeFormComponent,dialogConfig).afterClosed().subscribe(data=>{
    this.service.getAllEmployee().subscribe(
      data=>this.dataSource = new MatTableDataSource(data));
   })
  
   }
 
   
   onDelete(employee){
     this.service.deleteEmployee(employee).subscribe((data)=>{
      this.service.getAllEmployee().subscribe(
        data=>this.dataSource = new MatTableDataSource(data));
    });
   }

  
}


