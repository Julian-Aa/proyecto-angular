import { Injectable } from "@angular/core";
import { Comunidad } from "../core/models/comunidad.model";
@Injectable({
    providedIn: 'root',
})
export class AplicationService { 

    private comunidades: Comunidad[] = [];

    getComunidades(): Comunidad[] {
        return this.comunidades;
    }

    addComunidad(comunidad: Comunidad): void {
    this.comunidades.push(comunidad);
  }
}