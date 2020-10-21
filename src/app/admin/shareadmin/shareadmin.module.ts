import { HeaderaComponent } from './headera/headera.component';
import { FooteraComponent } from './footera/footera.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations:[FooteraComponent,HeaderaComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooteraComponent,HeaderaComponent
  ]
})
export class ShareadminModule { }
