import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LiveDateComponent } from './livedate.component';
import { HomePageComponent } from './homePage';
import { SecondPageComponent } from './secondPage';

@NgModule({
  declarations: [
    AppComponent,
    LiveDateComponent,
    HomePageComponent,
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
