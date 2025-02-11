import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

}
