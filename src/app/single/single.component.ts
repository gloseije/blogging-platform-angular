import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { User } from '../models/user';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  service: PostService = inject(PostService)
  category!: string
  id: number = -1
  post!: Post
  author!: User

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.one(this.id).then(response => {
      //Formater l'affichage de la date
      response.updatedAt = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(response.updatedAt));

      //Recupère la catégorie du post
      this.service.getCategories().then(res => {
        const index = res.findIndex(item => item.id == response.categoryId)

        this.category = res[index].name
      })
      //--------------------------------------------------------------------

      //Recuperer l'auteur (user)
      this.service.getAuthor(response.userId).then(res => {
        this.author = res
      })

      this.post = response
    })
  }
}
