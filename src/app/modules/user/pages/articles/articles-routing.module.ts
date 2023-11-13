import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticlesComponent } from './pages/create-articles/create-articles.component';
import { ListArticleComponent } from './pages/list-article/list-article.component';
import { ListArticleUsersComponent } from './pages/list-article-users/list-article-users.component';
import { EditArticlesComponent } from './pages/edit-articles/edit-articles.component';
import { ShowArticleContentComponent } from './pages/show-article-content/show-article-content.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'create-articles', component: CreateArticlesComponent },
      { path: 'list-news', component: ListArticleComponent },
      { path: 'articles-users', component: ListArticleUsersComponent },
      { path: 'edit-article/:id', component: EditArticlesComponent },
      { path: 'show-article/:id', component: ShowArticleContentComponent },
      { path: '**', redirectTo: 'list-news' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}