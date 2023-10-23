import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard/inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'comunidad',
        loadChildren: () =>
          import('./comunidad-list/comunidad-list.module').then(
            (m) => m.ComunidadListModule
          ),
      },
      {
        path: 'articulos',
        loadChildren: () =>
          import('./articulos/articulos.module').then((m) => m.ArticulosModule),
      },
      {
        path: 'crear',
        loadChildren: () =>
          import('./crear-comunidad/crear-comunidad.module').then(
            (m) => m.CrearComunidadModule
          ),
      },
      {
        path: 'crear-usuario',
        loadChildren: () =>
          import('./crear-usuario/crear-usuario.module').then(
            (m) => m.CrearUsuarioModule
          ),
      },
      {
        path: 'listar-usuarios',
        loadChildren: () =>
          import('./listar-usuarios/listar-usuarios.module').then(
            (m) => m.ListarUsuariosModule
          ),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('./perfil/perfil.module').then((m) => m.PerfilModule),
      },
    ],
  },
  { path: 'articulos', component: ArticulosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
