import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadListComponent } from './comunidad-list/comunidad-list.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearComunidadComponent } from './crear-comunidad/crear-comunidad.component';
import { PerfilComponent } from './perfil/perfil/perfil.component';

const routes: Routes = [
  { path: 'comunidad', component: ComunidadListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: FooterComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'crear', component: CrearComunidadComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
