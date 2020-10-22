import { ShareadminModule } from './../shareadmin/shareadmin.module';
import { LoginComponent } from './../commonadmin/login/login.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainadminComponent } from './mainadmin.component';
import {Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { QlsanphamComponent } from './qlsanpham/qlsanpham.component';
import { QlloaisanphamComponent } from './qlloaisanpham/qlloaisanpham.component';


const appreouter : Routes =[
  {
    path:'',
    component: MainadminComponent,
    children: [
      {
        path: '',
        component: ThongkeComponent
      },
    ]
  },
  {
    path:'login',
    component: LoginComponent
  }
]


@NgModule({
  declarations: [MainadminComponent, QlsanphamComponent, QlloaisanphamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appreouter),
    ShareadminModule
  ]
})
export class MainadminModule { }
