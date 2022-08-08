import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from 'src/Employee-list/Employeelist.Component';
import { EmployeeComponent } from 'src/Employee/Employee.component';

const routes:Routes=[
  { path:'employee',component:EmployeeComponent},
  { path:'emp-list',component:EmployeelistComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
