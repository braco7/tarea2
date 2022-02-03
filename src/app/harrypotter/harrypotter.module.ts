import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarrypotterRoutingModule } from './harrypotter-routing.module';
import { HarrypotterComponent } from './harrypotter.component';


@NgModule({
  declarations: [
    HarrypotterComponent
  ],
  imports: [
    CommonModule,
    HarrypotterRoutingModule
  ],
  exports: [
    HarrypotterComponent
  ]
})
export class HarrypotterModule { }
