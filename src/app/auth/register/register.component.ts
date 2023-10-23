import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
  };
  constructor(private usuarioService: RegisterService) {}
  onRegister() {
    this.usuarioService.post(this.usuario).subscribe(
      (response) => {
        console.log('usuario registrado exitosamente:', response);
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
