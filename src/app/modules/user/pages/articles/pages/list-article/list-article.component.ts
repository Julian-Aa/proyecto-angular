import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css'],
})
export class ListArticleComponent {
  articulos: any[] = [];
  currentPage = 1;
  itemsPerPage = 12;
  Array = Array;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData() {
    this.apiService.getData().subscribe((data) => {
      this.articulos = data.articles;
    });
  }
  get totalPages(): number {
    return Math.ceil(this.articulos.length / this.itemsPerPage);
  }
  get visibleArticles(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.articulos.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
