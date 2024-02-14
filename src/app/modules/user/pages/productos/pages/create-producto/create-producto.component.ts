import { Component } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.model';
import Swal from 'sweetalert2';
import { ProductoService } from '../../service/producto.service';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css'],
})
export class CreateProductoComponent {
  producto: Producto = {
    id: 0,
    descripcion: '',
    modelo: '',
    cantidadEnBodega: 0,
    valorVenta: 0.0,
  };

  constructor(private productoService: ProductoService) {}
  esAdmin() {
    const rol = Utils.getRole();
    console.log(rol);
    if (rol == 'admin') {
      return true;
    }
    return false;
  }
  crearProducto() {
    if (!this.validarCampos()) {
      return;
    }

    this.productoService
      .createProduct(this.producto, Utils.getNombreUsuario())
      .subscribe(
        (response) => {
          console.log(
            'Producto creado exitosamente:',
            response,
            Utils.getNombreUsuario()
          );
          Swal.fire({
            icon: 'success',
            title: 'Producto creado',
            text: 'El producto se ha creado con éxito.',
          });
          this.producto = {
            id: 0,
            descripcion: '',
            modelo: '',
            cantidadEnBodega: 0,
            valorVenta: 0.0,
          };
        },
        (error) => {
          console.error('Error al crear producto:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error al crear producto',
            text: 'Ha ocurrido un error al intentar crear el producto. Por favor, inténtalo de nuevo más tarde.',
          });
        }
      );
  }

  validarCampos(): boolean {
    if (
      !this.producto.descripcion ||
      !this.producto.modelo ||
      this.producto.cantidadEnBodega <= 0 ||
      this.producto.valorVenta <= 0.0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos correctamente.',
      });
      return false;
    }
    return true;
  }
}
