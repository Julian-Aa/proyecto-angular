import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms';
import { CrearUsuarioRoutingModule } from './crear-usuario-routing.module';

@NgModule({
  declarations: [CrearUsuarioComponent],
  imports: [CommonModule, CrearUsuarioRoutingModule, FormsModule],
  exports: [CrearUsuarioComponent],
})
export class CrearUsuarioModule {}
