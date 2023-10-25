import { Component } from '@angular/core';

@Component({
  selector: 'app-create-articles',
  templateUrl: './create-articles.component.html',
  styleUrls: ['./create-articles.component.css']
})
export class CreateArticlesComponent {
  article = {
    title: '',
    content: ''
  };

  onSubmit() {
    console.log('Artículo a guardar:', this.article);
  }
}
