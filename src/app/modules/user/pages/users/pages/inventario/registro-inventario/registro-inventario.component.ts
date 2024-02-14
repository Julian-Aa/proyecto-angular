import { Component } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.component.html',
  styleUrls: ['./registro-inventario.component.css'],
})
export class RegistroInventarioComponent {
  producto!: Producto;
  cantidad: number;
  tipoMovimiento: string;

  constructor() {
    this.producto = {
      id: 0,
      descripcion: '',
      modelo: '',
      cantidadEnBodega: 0,
      valorVenta: 0,
    };
    this.cantidad = 0;
    this.tipoMovimiento = 'entrada';
  }

  submitForm(): void {
    Swal.fire({
      title: '¡Movimiento registrado!',
      text: `Producto: ${this.producto}, Cantidad: ${this.cantidad}, Tipo de Movimiento: ${this.tipoMovimiento}`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });

    this.producto = {
      id: 0,
      descripcion: '',
      modelo: '',
      cantidadEnBodega: 0,
      valorVenta: 0,
    };
    this.cantidad = 0;
    this.tipoMovimiento = 'entrada';
  }
}
