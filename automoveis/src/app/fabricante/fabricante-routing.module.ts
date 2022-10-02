import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricanteMenuComponent } from './fabricante-menu/fabricante-menu.component';

const routes: Routes = [
  {path: '', component: FabricanteMenuComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricanteRoutingModule { }
