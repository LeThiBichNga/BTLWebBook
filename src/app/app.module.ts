import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './user/share/share.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';



const appreouter : Routes =[
  {
    path:'',
    loadChildren:()=>import('./user/main/main.module').then((m)=>m.MainModule)
  },
  {
    path:'admin',
    loadChildren:()=>import("./admin/mainadmin/mainadmin.module").then((m)=>m.MainadminModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appreouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
