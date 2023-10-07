import { Component } from '@angular/core';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  profile: any = {};
  constructor(private perfilService: PerfilService) {}

  updateProfile() {
    this.perfilService.put(this.profile)
      .subscribe(
        (response) => {
          console.log('Perfil actualizado exitosamente:', response);
        },
        (error) => {
          console.error('Error al actualizar el perfil:', error);
        }
      );
    console.log('Perfil actualizado:', this.profile);
  }
}
