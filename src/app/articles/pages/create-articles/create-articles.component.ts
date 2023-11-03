import { Usuario } from './../../../core/models/usuario.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulos } from 'src/app/core/models/articulos.model';
import { ArticleService } from '../../service/article.service';
import Swal from 'sweetalert2';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-create-articles',
  templateUrl: './create-articles.component.html',
  styleUrls: ['./create-articles.component.css'],
})
export class CreateArticlesComponent {
  articulo: Articulos = {
    titulo: '',
    contenido: '',
    autor: Utils.getNombreUsuario(),
    imagen: '',
  };
  fileToUpload: File | null = null;
  imageUrl: string = '';

  constructor(private articuloService: ArticleService) {}

  createArticle(): void {
    const articulo: Articulos = this.articulo;
    if (!articulo.titulo || !articulo.autor || !articulo.contenido) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen y de que price y quantity no sean negativos.',
      });
    } else {
      this.articuloService.createArticle(articulo).subscribe((response) => {});
      console.log('Nueva noticia:', articulo);
      Swal.fire(
        'Artículo creado',
        'El artículo se ha creado exitosamente',
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
      this.articuloService.addImagen(this.fileToUpload).subscribe(
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
