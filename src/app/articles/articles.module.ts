import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { FormsModule } from '@angular/forms';
import { ListArticleComponent } from './pages/list-article/list-article.component';
import { CreateArticlesComponent } from './pages/create-articles/create-articles.component';


@NgModule({
  declarations: [
    ListArticleComponent,
    CreateArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule
  ]
})
export class ArticlesModule { }
