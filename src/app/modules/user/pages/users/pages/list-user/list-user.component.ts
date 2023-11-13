import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.model';
import { ListarUsuariosService } from '../services/listar-usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.router.navigate(['/dashboard/users/edit-user/' + usuario.id]);
  }

  eliminarUsuario(usuario: any) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar al usuario "${usuario.nombre}"?`,
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.delete(usuario.id).subscribe(
          () => {
            this.actualizarListaUsuarios();
            Swal.fire('Eliminado', 'El usuario ha sido eliminado correctamente.', 'success');
          },
          (error) => {
            console.error('Error al eliminar el usuario:', error);
            Swal.fire('Error', 'Hubo un error al intentar eliminar el usuario.', 'error');
          }
        );
      }
    });
  }
}
