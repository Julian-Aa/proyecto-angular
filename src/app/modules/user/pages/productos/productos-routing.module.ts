import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './pages/create-producto/create-producto.component';
import { EditProductoComponent } from './pages/edit-producto/edit-producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-product', component: CreateProductoComponent },
      { path: 'edit-product/:id', component: EditProductoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
