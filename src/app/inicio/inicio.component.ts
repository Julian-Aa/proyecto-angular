import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  comunidades = [
    {
      nombre: 'Cod¡Go',
      descripcion: 'Descripción de la Comunidad 1.',
      imagenUrl: 'https://www.fpdgi.org/wp-content/uploads/2023/06/thumbnail_IMG_9386.jpg'
    },
  ];
}
