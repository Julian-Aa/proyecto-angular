import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadRoutingModule } from './comunidad-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComunidadComponent } from './pages/create-comunidad/create-comunidad.component';
import { ComunidadListComponent } from './pages/comunidad-list/comunidad-list.component';
import { EditComunidadComponent } from './pages/edit-comunidad/edit-comunidad.component';
import { ShowComunidadComponent } from './pages/show-comunidad/show-comunidad.component';

@NgModule({
  declarations: [
    CreateComunidadComponent,
    ComunidadListComponent,
    EditComunidadComponent,
    ShowComunidadComponent,
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class ComunidadModule {}
