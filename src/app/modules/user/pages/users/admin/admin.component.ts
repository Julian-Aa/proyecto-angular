import { ProductoService } from './../../productos/service/producto.service';
import { ListarUsuariosService } from '../pages/services/listar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Articulos } from 'src/app/core/models/articulos.model';
import { Producto } from 'src/app/core/models/producto.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  opcionSeleccionada: string = 'usuarios';
  productos: any[] = [];
  usuarios!: Usuario[];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private usuariosService: ListarUsuariosService,
  ) {}

  ngOnInit(): void {
    this.loadProductos();
    this.loadUsers();
  }
  mostrarContenido(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }
  loadProductos() {
    this.productoService.get().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.error('Error al cargar los productos', error);
      }
    );
  }
  loadUsers() {
    this.usuariosService.get().subscribe((usuarios) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });
  }
  editarProducto(producto: Producto) {
    this.router.navigate(['/dashboard/producto/edit-product/' + producto.id]);
  }
  deleteProducto(producto: Producto) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar el producto con descripcion: "${producto.descripcion}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.delete(producto.id).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'producto eliminado exitosamente',
            });

            this.loadProductos();
          },
          (error) => {
            console.error('Error al eliminar el producto:', error);

            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo más tarde.',
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
}
