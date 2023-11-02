export class Utils {
  static getRole(): string {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    if (usuario) {
      return usuario.rol;
    } else {
      return '';
    }
  }
  static isRole(role: string): boolean {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    console.log(usuario);
    
    if (usuario) {
      return usuario.rol.toLowerCase() == role.toLowerCase();
    } else {
      return false;
    }
  }
}
