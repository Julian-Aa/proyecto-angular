import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidad-list',
  templateUrl: './comunidad-list.component.html',
  styleUrls: ['./comunidad-list.component.css']
})
export class ComunidadListComponent {
  comunidades = [
    {
      nombre: 'Comunidad 1',
      descripcion: 'Descripción de la Comunidad 1.',
      imagenUrl: 'URL de la imagen 1'
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
