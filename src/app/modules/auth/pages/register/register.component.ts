import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    correo: '',
    contrasena: '',
    rol: 'vendedor',
  };
  constructor(
    private usuarioService: RegisterService,
    private router: Router
  ) {}
  esAdmin() {
    const rol = Utils.getRole();
    console.log(rol);
    if (rol == 'admin') {
      return true;
    }
    return false;
  }
  onRegister() {
    if (
      !this.usuario.nombre ||
      !this.usuario.correo ||
      !this.usuario.contrasena ||
      !this.usuario.rol
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, complete todos los campos.',
      });
      return;
    }

    this.usuarioService.post(this.usuario).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente:', response);
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: 'El usuario se ha registrado con éxito.',
        }).then(() => {
          if (this.esAdmin()) {
            this.router.navigate(['/dashboard/admin']);
          } else {
            this.router.navigate(['auth/login']);
          }
        });
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        if (error.error === 'El correo electrónico ya existe.') {
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'El correo electrónico ya existe.',
          });
        }
      }
    );
  }
}
