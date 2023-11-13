import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { EditUserComnponent } from './pages/edit-user/edit-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TruncatePipe } from 'src/app/core/utils/truncate.pipe';

@NgModule({
  declarations: [
    EditUserComnponent,
    ListUserComponent,
    AdminComponent,
    TruncatePipe,
  ],
  imports: [CommonModule, UsersRoutingModule, FormsModule],
})
export class UsersModule {}
