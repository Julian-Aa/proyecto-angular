import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuardGuard } from './auth/auth-guard.guard';
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuardGuard],
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
    ],
  },
  { path: 'articulos', component: ArticulosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
