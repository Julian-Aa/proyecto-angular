import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    FormsModule
  ], exports: [
    ArticulosComponent
  ]
})
export class ArticulosModule { }
