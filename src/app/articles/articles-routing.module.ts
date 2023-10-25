import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticlesComponent } from './pages/create-articles/create-articles.component';
import { ListArticleComponent } from './pages/list-article/list-article.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-articles', component: CreateArticlesComponent },
      { path: 'list-articles', component: ListArticleComponent },
      { path: '**', redirectTo: 'list-articles' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
