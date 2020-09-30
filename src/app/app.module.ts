import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShareComponent } from './user/share/share.component';
import { HeaderComponent } from './user/share/header/header.component';
import { FooterComponent } from './user/share/footer/footer.component';
import { BannerComponent } from './user/share/banner/banner.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShareComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
