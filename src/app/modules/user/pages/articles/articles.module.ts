import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListArticleComponent } from './pages/list-article/list-article.component';
import { CreateArticlesComponent } from './pages/create-articles/create-articles.component';
import { ListArticleUsersComponent } from './pages/list-article-users/list-article-users.component';
import { EditArticlesComponent } from './pages/edit-articles/edit-articles.component';
import { ShowArticleContentComponent } from './pages/show-article-content/show-article-content.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListArticleComponent,
    CreateArticlesComponent,
    ListArticleUsersComponent,
    EditArticlesComponent,
    ShowArticleContentComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ArticlesModule {}
