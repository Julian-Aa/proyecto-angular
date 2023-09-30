import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadListRoutingModule } from './comunidad-list-routing.module';
import { ComunidadListComponent } from './comunidad-list.component';


@NgModule({
  declarations: [ComunidadListComponent],
  imports: [
    CommonModule,
    ComunidadListRoutingModule
  ], exports: [
    ComunidadListComponent
  ]
})
export class ComunidadListModule { }
