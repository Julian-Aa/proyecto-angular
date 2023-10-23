import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../register/usuario.model';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  formLogin: FormGroup;
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rol:''
  };
  constructor(private http: LoginService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.formLogin.valid) {
      const usuario: Usuario = {
        id: 0,
        nombre: '',
        apellido: '',
        correo: this.formLogin.value.email,
        contrasena: this.formLogin.value.password,
        rol: 'custom'
      };

      this.http.post(usuario).subscribe(
        (user: any) => {
          console.log(user)
          console.log('Usuario autenticado:');
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['dashboard/inicio']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    } else {
      console.log('fallo');
    }
  }
}
