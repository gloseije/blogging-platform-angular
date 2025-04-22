import { Component, inject } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, RouterLink, NgFor],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  service: PostService = inject(PostService)
    posts!: Post[]
    hasPosts: boolean = false
  
  
    ngOnInit() {
      this.service.all().then(response => {
        if (response.length > 0) {
          this.hasPosts = true
        }
        this.posts = response
      })
    }
}
