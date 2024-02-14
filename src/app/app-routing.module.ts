import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { Utils } from './core/utils/utils';
import { InicioComponent } from './modules/user/pages/inicio/inicio.component';
import { ListUserComponent } from './modules/user/pages/users/pages/list-user/list-user.component';
import { AdminComponent } from './modules/user/pages/users/admin/admin.component';
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
        component: InicioComponent,
        canMatch: [() => Utils.isRole('admin')],
      },
      { path: 'admin', component: AdminComponent },
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
        path: 'producto',
        loadChildren: () =>
          import('./modules/user/pages/productos/productos.module').then(
            (m) => m.ProductosModule
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
