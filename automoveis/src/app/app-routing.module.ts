import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'automoveis', pathMatch: 'full'},

  {path: 'automoveis', loadChildren:() => import('./automoveis/automoveis.module').then(m => m.AutomoveisModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
