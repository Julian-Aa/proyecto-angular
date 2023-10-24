import { Component } from '@angular/core';
import { Usuario } from './usuario.model';
import { CrearUsuarioService } from './crear-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
  };
  constructor(
    private usuarioService: CrearUsuarioService,
    private router: Router
  ) {}
  onRegister() {
    this.usuarioService.post(this.usuario).subscribe(
      (response) => {
        console.log('usuario registrado exitosamente:', response);
        this.router.navigate(['auth/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        if (error.error === 'El correo electrónico ya existe.') {
        }
      }
    );
    console.log('Usuario registrado:', this.usuario);
  }
}
