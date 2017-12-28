import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeutronRatingComponent } from './neutron-rating.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    NeutronRatingComponent
  ],
  exports: [
    NeutronRatingComponent // <-- this!
  ]
})
export class NeutronRatingModule { }
