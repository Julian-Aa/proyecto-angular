import { TruncatePipe } from './../../../../core/utils/truncate.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListArticleComponent } from './pages/list-article/list-article.component';
import { CreateArticlesComponent } from './pages/create-articles/create-articles.component';
import { ListArticleUsersComponent } from './pages/list-article-users/list-article-users.component';
import { EditArticlesComponent } from './pages/edit-articles/edit-articles.component';

@NgModule({
  declarations: [
    ListArticleComponent,
    CreateArticlesComponent,
    ListArticleUsersComponent,
    TruncatePipe,
    EditArticlesComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ArticlesModule {}
