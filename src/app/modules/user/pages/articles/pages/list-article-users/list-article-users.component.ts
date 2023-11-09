import { Component } from '@angular/core';
import { ArticleService } from '../../service/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article-users',
  templateUrl: './list-article-users.component.html',
  styleUrls: ['./list-article-users.component.css'],
})
export class ListArticleUsersComponent {
  articulos: any[] = [];
  currentPage = 1;
  itemsPerPage = 12;
  Array = Array;

  constructor(private apiService: ArticleService, private router: Router) {}
  ngOnInit(): void {
    this.llenarData();
  }
  showArticle(id: number) {
    this.router.navigate(['dashboard/articles/show-article/' + id]);
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
