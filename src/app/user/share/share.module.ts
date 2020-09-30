import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BannerComponent,FooterComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BannerComponent,FooterComponent,HeaderComponent
  ]
})
export class ShareModule { }
