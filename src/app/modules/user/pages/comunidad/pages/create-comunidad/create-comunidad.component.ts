import { Component, OnInit } from '@angular/core';
import { Comunidad } from 'src/app/core/models/comunidad.model';
import { ComunidadService } from '../../services/comunidad.service';
import { Router } from '@angular/router';
import { Utils } from 'src/app/core/utils/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-comunidad',
  templateUrl: './create-comunidad.component.html',
  styleUrls: ['./create-comunidad.component.css'],
})
export class CreateComunidadComponent implements OnInit {
  nombreAutor: string= Utils.getNombreUsuario();
  comunidad: Comunidad = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagenUrl: '',
    usuarioId: Utils.getIdUsuario(),
  };
  fileToUpload: File | null = null;
  imageUrl: string = '';
  userComunidades: any[] = [];

  constructor(
    private router: Router,
    private comunidadService: ComunidadService
  ) {}
  ngOnInit(): void {
    this.loadUserComunidades();
  }

  loadUserComunidades() {
    this.comunidadService.getComunidadByUser(Utils.getIdUsuario()).subscribe(
      (response) => {
        this.userComunidades = response;
      },
      (error) => {
        console.error('Error al cargar las comunidades del usuario', error);
      }
    );
  }
  createComunidad(): void {
    const comunidad: Comunidad = this.comunidad;
    if (!comunidad.nombre || !comunidad.descripcion) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen.',
      });
    } else {
      this.comunidadService.createComunidad(comunidad).subscribe((response) => {
        this.loadUserComunidades();
      });
      Swal.fire(
        'Comunidad creada',
        'La comunidad se ha creado exitosamente',
        'success'
      );
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
  editComunidad(comunidad: Comunidad) {
    this.router.navigate([
      '/dashboard/comunidad/edit-comunidad/' + comunidad.id,
    ]);
  }
  deleteComunidad(comunidad: Comunidad) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar la comunidad "${comunidad.nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.comunidadService.delete(comunidad.id).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Comunidad eliminada exitosamente',
            });

            this.loadUserComunidades();
          },
          (error) => {
            console.error('Error al eliminar la comunidad:', error);

            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al eliminar la comunidad. Por favor, inténtalo de nuevo más tarde.',
            });
          }
        );
      }
    });
  }
}
