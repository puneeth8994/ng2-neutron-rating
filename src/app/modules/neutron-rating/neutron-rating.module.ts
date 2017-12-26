import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeutronRatingComponent } from './neutron-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NeutronRatingComponent
  ],
  exports: [
    NeutronRatingComponent // <-- this!
  ]
})
export class NeutronRatingModule { }
