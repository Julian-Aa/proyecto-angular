import { ComunidadService } from './../../../comunidad/services/comunidad.service';
import { ListarUsuariosService } from '../services/listar-usuarios.service';
import { ArticleService } from './../../../articles/service/article.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Comunidad } from 'src/app/core/models/comunidad.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Articulos } from 'src/app/core/models/articulos.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  opcionSeleccionada: string = 'comunidades';
  Comunidades: any[] = [];
  usuarios!: Usuario[];
  Articles: any[] = [];

  constructor(
    private router: Router,
    private comunidadService: ComunidadService,
    private usuariosService: ListarUsuariosService,
    private articuloService: ArticleService
  ) {}

  ngOnInit(): void {
    this.loadUserComunidades();
    this.loadUsers();
    this.loadArticles();
  }
  mostrarContenido(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }
  loadUserComunidades() {
    this.comunidadService.get().subscribe(
      (response) => {
        this.Comunidades = response;
      },
      (error) => {
        console.error('Error al cargar las comunidades del usuario', error);
      }
    );
  }
  loadUsers() {
    this.usuariosService.get().subscribe((usuarios) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }
  loadArticles() {
    this.articuloService.get().subscribe(
      (response) => {
        this.Articles = response;
      },
      (error) => {
        console.error('Error al cargar los artículos del usuario', error);
      }
    );
  }
  editComunidad(comunidad: Comunidad) {
    this.router.navigate([
      '/dashboard/comunidad/edit-comunidad/' + comunidad.id,
    ]);
  }
  deleteComunidad(comunidad: Comunidad) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar la comunidad "${comunidad.nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.comunidadService.delete(comunidad.id).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Comunidad eliminada exitosamente',
            });

            this.loadUserComunidades();
          },
          (error) => {
            console.error('Error al eliminar la comunidad:', error);

            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al eliminar la comunidad. Por favor, inténtalo de nuevo más tarde.',
            });
          }
        );
      }
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
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuariosService.delete(usuario.id).subscribe(
          () => {
            this.loadUsers();
            Swal.fire(
              'Eliminado',
              'El usuario ha sido eliminado correctamente.',
              'success'
            );
          },
          (error) => {
            console.error('Error al eliminar el usuario:', error);
            Swal.fire(
              'Error',
              'Hubo un error al intentar eliminar el usuario.',
              'error'
            );
          }
        );
      }
    });
  }
  editArticle(article: Articulos) {
    this.router.navigate(['dashboard/articles/edit-article/' + article.id]);
  }

  deleteArticle(article: Articulos) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar el artículo "${article.titulo}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.articuloService.delete(article.id).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Artículo eliminado exitosamente',
            });
            this.loadArticles();
          },
          (error) => {
            console.error('Error al eliminar el artículo:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al eliminar el artículo. Por favor, inténtalo de nuevo más tarde.',
            });
          }
        );
      }
    });
  }
}
