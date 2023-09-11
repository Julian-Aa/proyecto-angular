import { Injectable } from "@angular/core";
import { Comunidad } from "../model/Comunidad";
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