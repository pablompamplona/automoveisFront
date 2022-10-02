import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricanteRoutingModule } from './fabricante-routing.module';
import { FabricanteMenuComponent } from './fabricante-menu/fabricante-menu.component';


@NgModule({
  declarations: [
    FabricanteMenuComponent
  ],
  imports: [
    CommonModule,
    FabricanteRoutingModule
  ]
})
export class FabricanteModule { }
