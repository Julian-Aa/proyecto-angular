import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { Utils } from './core/utils/utils';
import { ListArticleComponent } from './modules/user/pages/articles/pages/list-article/list-article.component';
import { AdminComponent } from './modules/user/pages/users/pages/admin/admin.component';
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
        component: ListArticleComponent,
        canMatch: [() => Utils.isRole('admin')],
      },
      { path: 'admin', component: AdminComponent },
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
          import('./modules/user/pages/comunidad/comunidad.module').then(
            (m) => m.ComunidadModule
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
