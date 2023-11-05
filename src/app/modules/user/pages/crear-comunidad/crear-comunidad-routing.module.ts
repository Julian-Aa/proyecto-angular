import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComunidadComponent } from './crear-comunidad.component';

const routes: Routes = [
  {path: '', component: CrearComunidadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearComunidadRoutingModule { }
