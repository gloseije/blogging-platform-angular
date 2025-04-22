import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { NgFor } from '@angular/common';
import { Category } from '../models/category';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  service: PostService = inject(PostService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute)
  id: number = -1
  post!: Post
  categories!: Category[]

  editForm = new FormGroup({
    title: new FormControl(''),
    categoryId: new FormControl(0),
    image: new FormControl(''),
    content: new FormControl(''),
  });

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getCategories().then(rep => {
      this.categories = rep
    })

    this.service.one(this.id).then(response => {
      this.post = response

      this.editForm = new FormGroup({
        title: new FormControl(this.post.title),
        categoryId: new FormControl(this.post.categoryId),
        image: new FormControl(this.post.image),
        content: new FormControl(this.post.content),
      });
    })
    
  }

  edit() {
    this.service.edit(
      this.id,
      this.editForm.value.title??"",
      this.editForm.value.categoryId??0,
      this.editForm.value.image??"",
      this.editForm.value.content??''
    ).then(response => {
      if (response.title = this.editForm.value.title) {
        alert('Article modifié avec succès')
      }
    }).then(() => {
      this.router.navigate(['/dashboard'])
    })

    this.editForm = new FormGroup({
      title: new FormControl(''),
      categoryId: new FormControl(0),
      image: new FormControl(''),
      content: new FormControl(''),
    })
  }
}
