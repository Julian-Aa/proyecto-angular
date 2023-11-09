import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-article-content',
  templateUrl: './show-article-content.component.html',
  styleUrls: ['./show-article-content.component.css'],
})
export class ShowArticleContentComponent implements OnInit {
  articulo: any = {};
  constructor(
    private articuloService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.articulo.productoId = +idParam;
      this.articuloService
        .getById(this.articulo.productoId)
        .subscribe((data) => {
          this.articulo = data;
        });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
}
