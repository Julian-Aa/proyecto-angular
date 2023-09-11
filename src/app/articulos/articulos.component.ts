import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  articulos = [
    {
      id: 1,
      titulo: 'Título del Artículo 1',
      descripcion: 'Descripción breve del artículo 1.',
      imagenUrl: 'URL_IMAGEN_ARTICULO_1'
    },
    {
      id: 2,
      titulo: 'Título del Artículo 2',
      descripcion: 'Descripción breve del artículo 2.',
      imagenUrl: 'URL_IMAGEN_ARTICULO_2'
    },
    // Agrega más objetos de artículo según sea necesario
  ];
}
