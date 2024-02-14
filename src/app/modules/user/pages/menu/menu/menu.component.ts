import { Router } from '@angular/router';
import { Utils } from './../../../../../core/utils/utils';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private route: Router) {}
  ngOnInit(): void {}
  isAdmin() {
    const rol = Utils.getRole();
    if (rol == 'admin') {
      return true;
    }
    return false;
  }
  editarPerfil() {
    let id = Utils.getIdUsuario();
    this.route.navigate(['/dashboard/users/edit-user/' + id]);
  }
  verInventario() {
    this.route.navigate(['/dashboard/users/inventario']);
  }
  cerrarSesion() {
    this.route.navigate(['auth/login']);
  }
  gestionarAdministrador() {
    this.route.navigate(['/dashboard/admin/']);
  }
}
