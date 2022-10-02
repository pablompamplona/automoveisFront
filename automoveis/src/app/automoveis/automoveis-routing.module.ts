import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomoveisMenuComponent } from './automoveis-menu/automoveis-menu.component';

const routes: Routes = [
  {path: '', component: AutomoveisMenuComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomoveisRoutingModule { }
