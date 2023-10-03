import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticulosModule } from './articulos/articulos.module';
import { ComunidadListModule } from './comunidad-list/comunidad-list.module';
import { CrearComunidadModule } from './crear-comunidad/crear-comunidad.module';
import { FooterModule } from './footer/footer.module';
import { InicioModule } from './inicio/inicio.module';
import { MenuModule } from './menu/menu.module';
import { PerfilModule } from './perfil/perfil.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ArticulosModule,
    ComunidadListModule,
    CrearComunidadModule,
    FooterModule,
    InicioModule,
    MenuModule,
    PerfilModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
