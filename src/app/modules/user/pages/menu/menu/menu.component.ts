import { Utils } from './../../../../../core/utils/utils';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isAdmin() {
    const rol = Utils.getRole();
    if (rol == 'admin') {
      return true;
    }
    return false;
  }
  logout() {
  }
}
