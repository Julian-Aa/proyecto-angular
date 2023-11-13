import { Component } from '@angular/core';
import { ComunidadService } from '../../services/comunidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-edit-comunidad',
  templateUrl: './edit-comunidad.component.html',
  styleUrls: ['./edit-comunidad.component.css'],
})
export class EditComunidadComponent {
  comunidad: any = {};
  imageUrl: string = '';
  nombreAutor: string = Utils.getNombreUsuario();
  fileToUpload: File | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private comunidadService: ComunidadService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.comunidad.id = +idParam;
      this.comunidadService.getById(this.comunidad.id).subscribe((data) => {
        this.comunidad = data;
      });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  guardarCambios() {
    if (this.comunidad.nombre == '' || this.comunidad.descripcion == '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen.',
      });
    } else {
      this.comunidadService.put(this.comunidad.id, this.comunidad).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Comunidad actualizada exitosamente.',
          }).then(() => {});
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al actualizar el perfil. Por favor, inténtalo de nuevo más tarde.',
          });
        }
      );
      console.log('Perfil actualizado:', this.comunidad);
    }
  }
  handleFileInput(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const fileList = inputElement.files;

    if (fileList && fileList.length > 0) {
      this.fileToUpload = fileList[0];
      this.uploadFile();
    }
  }

  uploadFile() {
    if (this.fileToUpload) {
      this.comunidadService.addImagen(this.fileToUpload).subscribe(
        (imageUrl) => {
          this.imageUrl = imageUrl;
        },
        (error) => {
          console.error('Error al subir el archivo:', error);
        }
      );
    }
  }
}
