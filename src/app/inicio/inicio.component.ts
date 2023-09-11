import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  comunidades = [
    {
      nombre: 'GitHub',
      descripcion: 'Descripción de la Comunidad 1.',
      imagenUrl: 'https://www.fpdgi.org/wp-content/uploads/2023/06/thumbnail_IMG_9386.jpg'
    },
    {
      nombre: 'Scrum',
      descripcion: 'Descripción de la Comunidad 1.',
      imagenUrl: 'https://github.blog/wp-content/uploads/2022/12/1200x640-1.png?fit=1200%2C640'
    },
    {
      nombre: 'Start Up',
      descripcion: 'Descripción de la Comunidad 1.',
      imagenUrl: 'https://www.fpdgi.org/wp-content/uploads/2023/06/thumbnail_IMG_9386.jpg'
    },
  ];
}
