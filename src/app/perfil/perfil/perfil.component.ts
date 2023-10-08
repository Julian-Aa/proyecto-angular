import { Component } from '@angular/core';
import { PerfilService } from './perfil.service';
import { Usuario } from './usuario.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private perfilService: PerfilService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('{id}');
    if (idParam !== null) {
      this.usuario.id = +idParam;
      console.log('ID del usuario:', this.usuario.id);
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  updateProfile() {
    this.perfilService.put(this.usuario.id, this.usuario).subscribe(
      (response) => {
        console.log('Perfil actualizado exitosamente:', response);
        this.router.navigate(['/dashboard/listar-usuarios']);
      },
      (error) => {
        console.error('Error al actualizar el perfil:', error);
      }
    );
    console.log('Perfil actualizado:', this.usuario);
  }
}
