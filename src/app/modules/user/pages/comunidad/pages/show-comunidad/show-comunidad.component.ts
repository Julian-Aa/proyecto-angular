import { ComunidadService } from './../../services/comunidad.service';
import { Comentario } from 'src/app/core/models/comentario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/core/utils/utils';
import { Comunidad } from 'src/app/core/models/comunidad.model';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-show-comunidad',
  templateUrl: './show-comunidad.component.html',
  styleUrls: ['./show-comunidad.component.css'],
})
export class ShowComunidadComponent implements OnInit {
  mensajes: Comentario[] = [];
  idComunidad!: number;
  comunidadd!: Comunidad;
  usuarioActual: Usuario = Utils.getUsuario();

  constructor(
    private comunidadService: ComunidadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.idComunidad = +idParam;
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
    this.comunidadService.getById(this.idComunidad).subscribe((data) => {
      this.comunidadd = data;
      this.cargarComentarios();
    });
  }
  esUsuarioActual(nombreUsuarioMensaje: string): boolean {
    return nombreUsuarioMensaje === this.usuarioActual.nombre;
  }
  nuevMensaje: Comentario = {
    id: 0,
    contenido: '',
    fechaCreacion: new Date(),
    comunidad: null,
    usuario: Utils.getUsuario(),
    tipo: 'enviado',
  };

  cargarComentarios() {
    this.comunidadService.getComentarios(this.idComunidad).subscribe((data) => {
      this.mensajes = data.map((comentario) => ({
        ...comentario,
        esUsuarioActual: comentario.usuario === this.usuarioActual,
      }));
      console.log(data);
    });
  }

  enviarMensaje() {
    if (this.nuevMensaje.contenido.trim() != '') {
      this.nuevMensaje.comunidad = this.comunidadd;
      this.comunidadService
        .enviarMensaje(this.nuevMensaje)
        .subscribe((data) => {
          this.nuevMensaje.contenido = '';
          this.cargarComentarios();
        });
    }
  }
}
