import { Usuario } from '../models/usuario.model';

export class Utils {
  static getRole(): string {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    if (usuario) {
      return usuario.rol;
    } else {
      return '';
    }
  }
  static getNombreUsuario(): string {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    return usuario.nombre + ' ' + usuario.apellido;
  }
  static getUsuario(): Usuario {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    return usuario;
  }
  static getIdUsuario(): number {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    return usuario.id;
  }
  static isRole(role: string): boolean {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    if (usuario) {
      return usuario.rol.toLowerCase() == role.toLowerCase();
    } else {
      return false;
    }
  }
}
