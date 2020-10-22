import { HeaderaComponent } from './headera/headera.component';
import { FooteraComponent } from './footera/footera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations:[FooteraComponent,HeaderaComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    FooteraComponent,HeaderaComponent,NavbarComponent
  ]
})
export class ShareadminModule { }
