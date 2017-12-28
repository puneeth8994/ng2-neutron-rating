import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
//import { NeutronRatingComponent } from './modules/neutron-rating/neutron-rating.component';
import { NeutronRatingModule } from './modules/neutron-rating/neutron-rating.module';


@NgModule({
  declarations: [
    AppComponent
    //NeutronRatingComponent
  ],
  imports: [
    BrowserModule,
    NeutronRatingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
