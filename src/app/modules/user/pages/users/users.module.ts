import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { EditUserComnponent } from './pages/edit-user/edit-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AdminComponent } from './admin/admin.component';
import { RegistroInventarioComponent } from './pages/inventario/registro-inventario/registro-inventario.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EditUserComnponent,
    ListUserComponent,
    AdminComponent,
    RegistroInventarioComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule, SharedModule],
})
export class UsersModule {}
