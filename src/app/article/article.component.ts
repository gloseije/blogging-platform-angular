import { Component, inject, Input } from '@angular/core';
import { Post } from '../models/post';
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { User } from '../models/user';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() post!: Post;
  service: PostService = inject(PostService);
  category!: string;
  author!: User;

  ngOnInit() {
    //Formater l'affichage de la date
    this.post.updatedAt = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(this.post.updatedAt));

    //Recupère la catégorie du post
    this.service.getCategories().then((res) => {
      const index = res.findIndex((item) => item.id == this.post.categoryId);

      this.category = res[index].name;
    });

    //Recuperer l'auteur (user)
    this.service.getAuthor(this.post.userId).then(res => {
      this.author = res
    })
  }
}
