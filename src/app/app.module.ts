import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from './user/share/share.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';


const appreouter : Routes =[
  {
    path:'',
    loadChildren:()=>import('./user/main/main.module').then((m)=>m.MainModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
  
    
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
