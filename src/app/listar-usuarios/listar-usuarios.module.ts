import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { ListarUsuariosRoutingModule } from './listar-usuarios-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarUsuariosComponent],
  imports: [CommonModule, ListarUsuariosRoutingModule, FormsModule],
  exports:[ListarUsuariosComponent]
})
export class ListarUsuariosModule {}
