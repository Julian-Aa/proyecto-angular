import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadListComponent } from './pages/comunidad-list/comunidad-list.component';
import { CreateComunidadComponent } from './pages/create-comunidad/create-comunidad.component';
import { EditComunidadComponent } from './pages/edit-comunidad/edit-comunidad.component';
import { ShowComunidadComponent } from './pages/show-comunidad/show-comunidad.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'show-comunidad/:id', component: ShowComunidadComponent },
      { path: 'edit-comunidad/:id', component: EditComunidadComponent },
      { path: 'comunidades', component: ComunidadListComponent },
      { path: 'create-comunidad', component: CreateComunidadComponent },
      { path: '**', redirectTo: 'comunidades' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunidadRoutingModule {}
