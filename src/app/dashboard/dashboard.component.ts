import { Component, inject } from '@angular/core';
import { ArticleDashboardComponent } from "../article-dashboard/article-dashboard.component";
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { isPost, Post } from '../models/post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ArticleDashboardComponent, RouterLink, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  service: PostService = inject(PostService)
  posts!: Post[]
  hasPosts: boolean = false


  ngOnInit() {
    this.service.getPostByUserId().then(response => {
      if (response.length > 0) {
        this.hasPosts = true
      }
      this.posts = response
    })
  }

}
