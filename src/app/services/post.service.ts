import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  //Récupérer les catégories
  async getCategories(): Promise<Category[]> {
    let rep = await fetch('http://localhost:3333/categories').then((response) =>
      response.json()
    );

    return rep;
  }

  //Récuperer tous les posts
  async all() {
    let rep = await fetch('http://localhost:3333/posts/').then((response) =>
      response.json()
    );
    return rep;
  }

  //Récuperer un post
  async one(id: number): Promise<Post> {
    let rep = await fetch('http://localhost:3333/post/' + id).then(response => response.json());

    return rep;
  }
  //Recuperer l'auteur du post
  async getAuthor(userId: number): Promise<User> {
    let rep = await fetch('http://localhost:3333/users/' + userId).then(response => response.json());

    return rep;
  }
  
  //Récupérer les posts de l'utilisateur connecté
  async getPostByUserId() {
    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth') ?? '');
      const userId = auth.user.id;

      let rep = await fetch('http://localhost:3333/posts/' + userId, {
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + auth.token.token,
        },
        method: 'GET',
      }).then((response) => response.json());

      return rep;
    }
  }

  //Créer un post
  async create(
    title: string,
    categoryId: number,
    image: string,
    content: string
  ) {
    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth') ?? '');

      const data = {
        title: title,
        categoryId: categoryId,
        image: image,
        content: content,
        userId: auth.user.id,
      };

      let rep = await fetch('http://localhost:3333/posts', {
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + auth.token.token,
        },
        method: 'POST',
        body: JSON.stringify(data),
      }).then((response) => response.json());

      return rep;
    }
  }

  //Modifier un post
  async edit(
    id: number,
    title: string,
    categoryId: number,
    image: string,
    content: string
  ) {
    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth') ?? '');

      const data = {
        title: title,
        categoryId: categoryId,
        image: image,
        content: content,
        userId: auth.user.id,
      };

      let rep = await fetch('http://localhost:3333/posts/' + id, {
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + auth.token.token,
        },
        method: 'PUT',
        body: JSON.stringify(data),
      }).then((response) => response.json());

      return rep;
    }
  }

  //Supprimer un post
  async delete(id:number) {

    let rep
    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth') ?? '');

      this.one(id).then(res => {
        if (res.userId == auth.user.id) {
          rep = fetch('http://localhost:3333/posts/' + id, {
            headers: {
              'content-type': 'application/json',
              authorization: 'Bearer ' + auth.token.token,
            },
            method: 'DELETE',
          }).then((response) => response.json());
        }
      })

      return rep;
    }
  }
}
