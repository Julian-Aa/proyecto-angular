import { Component } from '@angular/core';
import { PerfilService } from './services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComnponent {
  usuario: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private perfilService: PerfilService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.usuario.id = +idParam;
      this.perfilService.getById(this.usuario.id).subscribe((data) => {
        this.usuario = data;
      });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  updateProfile() {
    if (
      !this.usuario.nombre ||
      !this.usuario.apellido ||
      !this.usuario.correo ||
      !this.usuario.contrasena
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, complete todos los campos.',
      });
      return;
    }

    this.perfilService.put(this.usuario.id, this.usuario).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario editado',
          text: 'El usuario se ha editado con éxito.',
        }).then(() => {});
      },
      (error) => {
        if (error.error === 'El correo electrónico ya existe.') {
          Swal.fire({
            icon: 'error',
            title: 'Error al editar',
            text: 'El correo electrónico ya existe.',
          });
        }
      }
    );
  }
}
