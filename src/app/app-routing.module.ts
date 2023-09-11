import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadListComponent } from './comunidad-list/comunidad-list.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  { path: 'comunidad', component: ComunidadListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: FooterComponent },
  { path: 'articulos', component: ArticulosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
