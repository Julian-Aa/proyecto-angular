import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidad-list',
  templateUrl: './comunidad-list.component.html',
  styleUrls: ['./comunidad-list.component.css']
})
export class ComunidadListComponent {
  comunidades = [
    {
      nombre: 'Cod¡Go',
      descripcion: 'Descripción de la Comunidad 1.',
      imagenUrl: 'https://www.fpdgi.org/wp-content/uploads/2023/06/thumbnail_IMG_9386.jpg'
    },
    {
      nombre: 'Comunidad 2',
      descripcion: 'Descripción de la Comunidad 2.',
      imagenUrl: 'URL de la imagen 2'
    },
    {
      nombre: 'Comunidad 2',
      descripcion: 'Descripción de la Comunidad 2.',
      imagenUrl: 'URL de la imagen 2'
    },
  ];
}
