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
      titulo: 'Comunidad de Java',
      descripcion: 'Descripción breve del artículo 1.',
      imagenUrl: './assets/java.webp'
    },
    {
      id: 2,
      titulo: 'Comunidad de PHP',
      descripcion: 'Descripción breve del artículo 2.',
      imagenUrl: './assets/php.webp'
    },
    {
      id: 3,
      titulo: 'Comunidad de Java Script',
      descripcion: 'Descripción breve del artículo 2.',
      imagenUrl: './assets/js.webp'
    },
    {
      id: 4,
      titulo: 'Comunidad de Python',
      descripcion: 'Descripción breve del artículo 2.',
      imagenUrl: './assets/nodejs.webp'
    },
    {
      id: 5,
      titulo: 'Comunindad de Node JS',
      descripcion: 'Descripción breve del artículo 2.',
      imagenUrl: './assets/python.webp'
    },
    {
      id: 6,
      titulo: 'C#',
      descripcion: 'Descripción breve del artículo 2.',
      imagenUrl: './assets/c_.webp'
    },
    // Agrega más objetos de artículo según sea necesario
  ];
}
