import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [BannerComponent,FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BannerComponent,FooterComponent,HeaderComponent
  ]
})
export class ShareModule { }
