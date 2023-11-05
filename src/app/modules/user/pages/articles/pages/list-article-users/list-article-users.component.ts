import { Component } from '@angular/core';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-list-article-users',
  templateUrl: './list-article-users.component.html',
  styleUrls: ['./list-article-users.component.css']
})
export class ListArticleUsersComponent {
  articulos: any[] = [];
  currentPage = 1;
  itemsPerPage = 12;
  Array = Array;

  constructor(private apiService: ArticleService) {}
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData() {
    this.apiService.get().subscribe((data) => {
      this.articulos = data;
      console.log(data);
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
