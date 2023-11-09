import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComnponent } from './pages/edit-user/edit-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list-user', component: ListUserComponent },
      { path: 'edit-user/:id', component: EditUserComnponent },
      { path: '**', redirectTo: 'list-user' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
