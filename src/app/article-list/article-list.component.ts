import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

}
