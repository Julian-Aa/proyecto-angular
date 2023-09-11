import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadListComponent } from './comunidad-list/comunidad-list.component';

const routes: Routes = [
  { path: 'comunidad', component: ComunidadListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
