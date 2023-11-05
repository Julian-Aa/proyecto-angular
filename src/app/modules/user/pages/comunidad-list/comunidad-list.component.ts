import { Comunidad } from './../../../../core/models/comunidad.model';
import { AplicationService } from './../../../../service/AplicationService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidad-list',
  templateUrl: './comunidad-list.component.html',
  styleUrls: ['./comunidad-list.component.css']
})
export class ComunidadListComponent {

  constructor(private aplicationService: AplicationService) {
    this.aplicationService.addComunidad(this.comunidad1);
    this.aplicationService.addComunidad(this.comunidad2);
    this.aplicationService.addComunidad(this.comunidad3);

  }

  comunidades: Comunidad[] = this.aplicationService.getComunidades();

  comunidad1 = new Comunidad(this.comunidades.length + 1, 'SpringBoot', 'Esta es una comunidad de spring boot', 'https://www.qindel.com/wp-content/uploads/2023/04/spring-boot.jpeg');
  comunidad2 = new Comunidad(this.comunidades.length + 1, 'SpringBoot', 'Esta es una comunidad de spring boot', 'https://www.qindel.com/wp-content/uploads/2023/04/spring-boot.jpeg');
  comunidad3 = new Comunidad(this.comunidades.length + 1, 'SpringBoot', 'Esta es una comunidad de spring boot', 'https://www.qindel.com/wp-content/uploads/2023/04/spring-boot.jpeg');




  
}
