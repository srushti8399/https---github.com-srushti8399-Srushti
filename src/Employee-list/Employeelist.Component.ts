import { Component } from "@angular/core";
@Component({
    selector:'emp-list',
    templateUrl:'./employeelist.component.html'
  
})
export class EmployeelistComponent{
employees:any[]=[
    {firstname:'John',middlename:'jerry',lastname:'jack', age:34,gender:'Male',Dob:'20-jan-2000',add1:'new york',add2:'USA'},
    {firstname:'Mary',middlename:'andrew',lastname:'hack', age:22,gender:'female',Dob:'25-feb-2002',add1:'new york',add2:'USA'},
    {firstname:'priya',middlename:'bheem',lastname:'mack',age:45,gender:'female',Dob:'23-mar-2004',add1:'new york',add2:'USA'},
    {firstname:'raju',middlename:'ram',lastname:'rack',age:23,gender:'female',Dob:'21-apr-2005',add1:'new york',add2:'USA'},
    {firstname:'pinky',middlename:'shyam',lastname:'pack',age:34,gender:'female',Dob:'22-jun-2003',add1:'new york',add2:'USA'}
  ];
}