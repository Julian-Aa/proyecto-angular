import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CreateProductoComponent } from './pages/create-producto/create-producto.component';
import { FormsModule } from '@angular/forms';
import { EditProductoComponent } from './pages/edit-producto/edit-producto.component';

@NgModule({
  declarations: [CreateProductoComponent, EditProductoComponent],
  imports: [CommonModule, ProductosRoutingModule, FormsModule],
})
export class ProductosModule {}
