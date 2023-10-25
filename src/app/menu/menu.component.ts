import { Component } from '@angular/core';
import { Utils } from '../utils/utils';

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
