import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { MainUserAdminComponent } from './modules/admin/main-user-admin/main-user-admin.component';
import { Utils } from './core/utils/utils';
import { ListArticleComponent } from './modules/user/pages/articles/pages/list-article/list-article.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
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
        component: ListArticleComponent,
        canMatch: [() => Utils.isRole('custom')],
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('./modules/user/pages/articles/articles.module').then(
            (m) => m.ArticlesModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/user/pages/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./modules/user/pages/inicio/inicio.module').then(
            (m) => m.InicioModule
          ),
      },
      {
        path: 'comunidad',
        loadChildren: () =>
          import(
            './modules/user/pages/comunidad-list/comunidad-list.module'
          ).then((m) => m.ComunidadListModule),
      },
      {
        path: 'crear',
        loadChildren: () =>
          import(
            './modules/user/pages/crear-comunidad/crear-comunidad.module'
          ).then((m) => m.CrearComunidadModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
