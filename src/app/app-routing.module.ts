import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { MainUserAdminComponent } from './main-user-admin/main-user-admin.component';
import { Utils } from './core/utils/utils';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'logout', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
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
      {
        path: '',
        component: MainUserAdminComponent,
        canMatch: [() => Utils.isRole('admin')],
      },
      {
        path: '',
        component: InicioComponent,
        canMatch: [() => Utils.isRole('custom')],
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('./articles/articles.module').then((m) => m.ArticlesModule),
      },
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
        path: 'crear',
        loadChildren: () =>
          import('./crear-comunidad/crear-comunidad.module').then(
            (m) => m.CrearComunidadModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
