import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearComunidadRoutingModule } from './crear-comunidad-routing.module';
import { CrearComunidadComponent } from './crear-comunidad.component';


@NgModule({
  declarations: [
    CrearComunidadComponent
  ],
  imports: [
    CommonModule,
    CrearComunidadRoutingModule
  ], exports:[
    CrearComunidadComponent
  ]
})
export class CrearComunidadModule { }
