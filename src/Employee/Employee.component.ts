import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators} from '@angular/forms';
import { IUser } from 'src/Model/EmployeeModel';


@Component({
  selector: 'employee',
  templateUrl: './Employee.component.html',
  styleUrls:['./Employee.component.css']
  
})
export class EmployeeComponent {
  firstname:string="";
  Middlename:string="";
  lastname:string="";
  Age = new FormControl(100, Validators.min(0));
 
  user:IUser={
     gender:"",
     }
     genders:any[]=[
      {viewValue:-1,Text:"Select Gender"},
      {viewValue:1,Text:"Male"},
      {viewValue:2,Text:"FeMale"}
    ];
  

  saveUser(form:NgForm){
    console.log(form);
      }
      
      
  title = 'Demo';
}