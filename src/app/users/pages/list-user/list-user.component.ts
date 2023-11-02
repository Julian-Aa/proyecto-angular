import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { ListarUsuariosService } from './services/listar-usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  usuarios!: Usuario[];
  constructor(
    private router: Router,
    private usuariosService: ListarUsuariosService
  ) {}
  ngOnInit(): void {
    this.actualizarListaUsuarios();
  }
  actualizarListaUsuarios() {
    this.usuariosService.get().subscribe((usuarios) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }
  editarUsuario(usuario: Usuario) {
    this.router.navigate(['/dashboard/perfil/' + usuario.id]);
  }

  eliminarUsuario(usuario: any) {
    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar el producto "${usuario.nombre}"?`
    );
    if (confirmacion) {
      this.usuariosService.delete(usuario.id).subscribe(
        () => {
          this.actualizarListaUsuarios();
        },
        (error) => {
          console.log(usuario.id);
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }
}
