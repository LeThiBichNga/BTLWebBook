
import { MainComponent } from './main.component';
import { ShareModule } from './../share/share.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
const appreouter : Routes =[
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'',
        component: BodyComponent
      },
      {
        path:'trangchu',
        component: BodyComponent
      },
      {
        path:'sanpham',
        component: ProductComponent
      },
      {
        path:'tintuc',
        component: BlogComponent
      }
    ]
  }
]


@NgModule({
  declarations: [MainComponent, BodyComponent, ProductComponent, BlogComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(appreouter)
  ]
})
export class MainModule { }
