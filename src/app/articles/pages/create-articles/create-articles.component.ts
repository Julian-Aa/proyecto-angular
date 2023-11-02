import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulos } from 'src/app/core/models/articulos.model';
import { ArticleService } from '../../service/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-articles',
  templateUrl: './create-articles.component.html',
  styleUrls: ['./create-articles.component.css'],
})
export class CreateArticlesComponent {
  articulo: Articulos = {
    titulo:'',
    contenido:'',
    autor
  };
  fileToUpload: File | null = null;
  imageUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private articuloService: ArticleService
  ) {
    this.noticiaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      autor: ['', Validators.required],
    });
  }

  createArticle() {
    if (this.noticiaForm.valid) {
      const nuevaNoticia: Articulos = this.noticiaForm.value;
      this.articuloService
        .createArticle(nuevaNoticia)
        .subscribe((response) => {});
      console.log('Nueva noticia:', nuevaNoticia);
      Swal.fire(
        'Artículo creado',
        'El artículo se ha creado exitosamente',
        'success'
      );

      this.noticiaForm.reset();
    } else {
      Swal.fire(
        'Error',
        'Por favor, completa todos los campos correctamente',
        'error'
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
