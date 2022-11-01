import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClothesComponent } from './clothes/clothes.component';
import { TopsComponent } from './clothes/tops/tops.component';
import { HalterPatternComponent } from './clothes/tops/halter-pattern/halter-pattern.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BagsComponent } from './accessories/bags/bags.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClothesComponent,
    TopsComponent,
    HalterPatternComponent,
    AccessoriesComponent,
    BagsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
