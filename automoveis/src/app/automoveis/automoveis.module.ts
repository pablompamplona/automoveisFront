import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AutomoveisMenuComponent } from './automoveis-menu/automoveis-menu.component';
import { AutomoveisRoutingModule } from './automoveis-routing.module';

@NgModule({
  declarations: [
    AutomoveisMenuComponent
  ],
  imports: [
    CommonModule,
    AutomoveisRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class AutomoveisModule { }
