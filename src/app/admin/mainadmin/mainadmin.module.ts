import { ShareadminModule } from './../shareadmin/shareadmin.module';
import { LoginComponent } from './../commonadmin/login/login.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainadminComponent } from './mainadmin.component';
import {Routes, RouterModule} from '@angular/router';
import { QlsanphamComponent } from './qlsanpham/qlsanpham.component';
import { AuthGuard } from 'src/app/lib/auth.guard';
import { SanphamsaphetComponent } from './sanphamsaphet/sanphamsaphet.component';
import { SanphamhetComponent } from './sanphamhet/sanphamhet.component';

import { JwPaginationModule } from 'jw-angular-pagination';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

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
        path: 'thongke',
        component: ThongkeComponent
      },
      {
        path: 'sanpham',
        component: QlsanphamComponent
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  }
]


@NgModule({
  declarations: [MainadminComponent, QlsanphamComponent,  SanphamsaphetComponent, SanphamhetComponent,  ThongkeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appreouter),
    ShareadminModule,
    JwPaginationModule,
    CKEditorModule,
    FormsModule
  ]
})
export class MainadminModule { }
