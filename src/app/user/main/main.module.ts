
import { MainComponent } from './main.component';
import { ShareModule } from './../share/share.module';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { BodyComponent } from './body/body.component';
const appreouter : Routes =[
  {
    path:'',
    component: MainComponent
  }
]


@NgModule({
  declarations: [MainComponent, BodyComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(appreouter)
  ]
})
export class MainModule { }
