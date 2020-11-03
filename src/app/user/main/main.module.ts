
import { MainComponent } from './main.component';
import { ShareModule } from './../share/share.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ContantComponent } from './contant/contant.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
        path:'sanpham/:id',
        component: ProductComponent
      },
      {
        path:'sanpham',
        component: AllproductComponent
      },
      {
        path:'tintuc',
        component: BlogComponent
      },
      {
        path:'chitietsanpham/:id',
        component: SingleProductComponent
      },
      {
        path:'chitiettintuc/:id',
        component: SinglePostComponent
      },
      {
        path:'giohang',
        component: ShoppingcartComponent
      },
      {
        path: 'timkiem/:txtsearch',
        component: SearchComponent
      },
      {
        path: 'dathang',
        component: CheckoutComponent
      }
    ]
  }
]


@NgModule({
  declarations: [MainComponent, BodyComponent, ProductComponent, BlogComponent, SingleProductComponent, ContantComponent, IntroduceComponent, AllproductComponent, SinglePostComponent, ShoppingcartComponent, SearchComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(appreouter)
  ]
})
export class MainModule { }
