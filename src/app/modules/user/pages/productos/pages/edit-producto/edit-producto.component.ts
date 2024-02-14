import { ProductoService } from './../../service/producto.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from 'src/app/core/utils/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css'],
})
export class EditProductoComponent {
  product: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.product.id = +idParam;
      this.productoService.getById(this.product.id).subscribe((productos) => {
        this.product = productos;
      });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  isAdmin(): boolean {
    return Utils.getRole() === 'admin';
  }

  isVendor(): boolean {
    return Utils.getRole() === 'vendedor';
  }
  guardarCambios() {
    if (this.product.modelo == '' || this.product.descripcion == '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen.',
      });
    } else {
      this.productoService.put(this.product.id, this.product).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Comunidad actualizada exitosamente.',
          }).then(() => {});
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al actualizar el perfil. Por favor, inténtalo de nuevo más tarde.',
          });
        }
      );
      console.log('Perfil actualizado:', this.product);
    }
  }
}
