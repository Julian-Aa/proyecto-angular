import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent {
  articulos: any []= [];

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.articulos = data.articles;
      console.log(data);
    })
  }
}
