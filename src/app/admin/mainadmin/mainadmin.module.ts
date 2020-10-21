import { LoginComponent } from './../commonadmin/login/login.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainadminComponent } from './mainadmin.component';
import {Routes, RouterModule} from '@angular/router';


const appreouter : Routes =[
  {
    path:'',
    component: MainadminComponent,
    children: [
      {
        path: '',
        component: ThongkeComponent
      },
      {
        path:'login',
        component: LoginComponent
      }
    ]
  }
]


@NgModule({
  declarations: [MainadminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appreouter)
  ]
})
export class MainadminModule { }
