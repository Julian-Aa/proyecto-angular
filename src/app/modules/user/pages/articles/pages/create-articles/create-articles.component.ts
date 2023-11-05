import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/core/models/articulos.model';
import { ArticleService } from '../../service/article.service';
import Swal from 'sweetalert2';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-create-articles',
  templateUrl: './create-articles.component.html',
  styleUrls: ['./create-articles.component.css'],
})
export class CreateArticlesComponent implements OnInit {
  articulo: Articulos = {
    id: 0,
    titulo: '',
    contenido: '',
    autor: Utils.getNombreUsuario(),
    imagen: '',
    userId: Utils.getIdUsuario(),
  };
  fileToUpload: File | null = null;
  imageUrl: string = '';
  userArticles: any[] = [];

  constructor(
    private router: Router,
    private articuloService: ArticleService
  ) {}

  ngOnInit(): void {
    this.loadUserArticles();
  }

  loadUserArticles() {
    this.articuloService.getArticlesByUser(Utils.getIdUsuario()).subscribe(
      (response) => {
        this.userArticles = response;
      },
      (error) => {
        console.error('Error al cargar los artículos del usuario', error);
      }
    );
  }

  createArticle(): void {
    const articulo: Articulos = this.articulo;
    if (!articulo.titulo || !articulo.autor || !articulo.contenido) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos, asegúrate de seleccionar una imagen.',
      });
    } else {
      this.articuloService.createArticle(articulo).subscribe((response) => {
        this.loadUserArticles();
      });
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
  editArticle(article: Articulos) {
    this.router.navigate(['dashboard/articles/edit-article/' + article.id]);
  }

  deleteArticle(article: Articulos) {
    const confirmacion = confirm(
      `¿Estás seguro de que deseas eliminar el articulo "${article.titulo}"?`
    );
    if (confirmacion) {
      this.articuloService.delete(article.id).subscribe(
        () => {
          this.loadUserArticles();
        },
        (error) => {
          console.error('Error al eliminar el articulo:', error);
        }
      );
    }
  }
}
