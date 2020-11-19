import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContactComponent} from './component/contact/contact.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {LoginComponent} from './security/component/login/login.component';
import {LogoutComponent} from './security/component/logout/logout.component';
import {ErrorComponent} from './component/error/error.component';
import {AddStudentComponent} from './component/add-student/add-student.component';
import {AddTeacherComponent} from './component/add-teacher/add-teacher.component';
import {AddEmployeeComponent} from './component/add-employee/add-employee.component';
import {AddBookComponent} from './component/add-book/add-book.component';
import {AddLaptopComponent} from './component/add-laptop/add-laptop.component';
import {AllStudentComponent} from './component/all-student/all-student.component';
import {AllTeacherComponent} from './component/all-teacher/all-teacher.component';
import {AllEmployeeComponent} from './component/all-employee/all-employee.component';
import {AllBookComponent} from './component/all-book/all-book.component';
import {AllLaptopComponent} from './component/all-laptop/all-laptop.component';
import {UpdateStudentComponent} from './component/update-student/update-student.component';
import {UpdateTeacherComponent} from './component/update-teacher/update-teacher.component';
import {UpdateEmployeeComponent} from './component/update-employee/update-employee.component';
import {UpdateBookComponent} from './component/update-book/update-book.component';
import {UpdateLaptopComponent} from './component/update-laptop/update-laptop.component';
import {ErrorLoginComponent} from './security/component/error-login/error-login.component';
import {AuthGaurdService} from './security/service/auth-gaurd.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGaurdService]},
  {path: 'dashboard', redirectTo: '/dashboard/all-student', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGaurdService], children: [
      {path: 'add-student', component: AddStudentComponent, canActivate: [AuthGaurdService]},
      {path: 'add-teacher', component: AddTeacherComponent, canActivate: [AuthGaurdService]},
      {path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGaurdService]},
      {path: 'add-book', component: AddBookComponent, canActivate: [AuthGaurdService]},
      {path: 'add-laptop', component: AddLaptopComponent, canActivate: [AuthGaurdService]},
      {path: 'all-student', component: AllStudentComponent, canActivate: [AuthGaurdService]},
      {path: 'all-teacher', component: AllTeacherComponent, canActivate: [AuthGaurdService]},
      {path: 'all-employee', component: AllEmployeeComponent, canActivate: [AuthGaurdService]},
      {path: 'all-book', component: AllBookComponent, canActivate: [AuthGaurdService]},
      {path: 'all-laptop', component: AllLaptopComponent, canActivate: [AuthGaurdService]},
      {path: 'update-student/:id', component: UpdateStudentComponent, canActivate: [AuthGaurdService]},
      {path: 'update-teacher/:id', component: UpdateTeacherComponent, canActivate: [AuthGaurdService]},
      {path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate: [AuthGaurdService]},
      {path: 'update-book/:id', component: UpdateBookComponent, canActivate: [AuthGaurdService]},
      {path: 'update-laptop/:id', component: UpdateLaptopComponent, canActivate: [AuthGaurdService]}
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'login-error', component: ErrorLoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  HomeComponent,
  ContactComponent,
  DashboardComponent,
    AddStudentComponent,
    AddTeacherComponent,
    AddEmployeeComponent,
    AddBookComponent,
    AddLaptopComponent,

    AllStudentComponent,
    AllTeacherComponent,
    AllEmployeeComponent,
    AllBookComponent,
    AllLaptopComponent,

    UpdateStudentComponent,
    UpdateTeacherComponent,
    UpdateEmployeeComponent,
    UpdateBookComponent,
    UpdateLaptopComponent,

  LoginComponent,
  ErrorLoginComponent,
  LogoutComponent,
  ErrorComponent
];
