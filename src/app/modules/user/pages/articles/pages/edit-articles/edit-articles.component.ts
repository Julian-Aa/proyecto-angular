import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from './../../service/article.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css'],
})
export class EditArticlesComponent {
  articulo: any = {};
  imageUrl: string = '';
  fileToUpload: File | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.articulo.productoId = +idParam;
      this.articleService
        .getById(this.articulo.productoId)
        .subscribe((data) => {
          this.articulo = data;
        });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }

  guardarCambios() {
    if (this.articulo.titulo == '' || this.articulo.contenido == '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen.',
      });
    } else {
      this.articleService.put(this.articulo.id, this.articulo).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Articulo actualizado exitosamente.',
          }).then(() => {
            this.router.navigate(['/dashboard/articles/create-articles']);
          });
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
      console.log('Perfil actualizado:', this.articulo);
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
      this.articleService.addImagen(this.fileToUpload).subscribe(
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
