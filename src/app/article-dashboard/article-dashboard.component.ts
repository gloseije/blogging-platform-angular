import { Component, inject, Input } from '@angular/core';
import { Post } from '../models/post';
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-article-dashboard',
  imports: [RouterLink],
  templateUrl: './article-dashboard.component.html',
  styleUrl: './article-dashboard.component.css',
})
export class ArticleDashboardComponent {
  @Input() post!: Post;
  service: PostService = inject(PostService);
  category!: string;

  ngOnInit() {
    //Formater l'affichage de la date
    this.post.updatedAt = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(this.post.updatedAt));

    //Recupère la catégorie du post
    this.service.getCategories().then(res => {
      const index = res.findIndex(item => item.id == this.post.categoryId)

      this.category = res[index].name
    })
  }

  //Supprimer l'article
  delete() {
    if (confirm('Voulez-vous supprimer l\'article')) {
      this.service.delete(this.post.id).then(response => {
        alert('Vous avez supprimé un article!')
        location.reload()
      })
    }
  }
}
