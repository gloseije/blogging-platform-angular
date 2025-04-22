import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  service: PostService = inject(PostService)
  router: Router = inject(Router)
  categories!: Category[]

  createForm = new FormGroup({
    title: new FormControl(''),
    categoryId: new FormControl(0),
    image: new FormControl(''),
    content: new FormControl(''),
  })

  ngOnInit() {
    this.service.getCategories().then(rep => {
      this.categories = rep
    })
  }

  save() {
    this.service.create(
      this.createForm.value.title??"",
      this.createForm.value.categoryId??0,
      this.createForm.value.image??"",
      this.createForm.value.content??''
    ).then(response => {
      alert('Article créé avec succès')

    }).then(() => {
      this.router.navigate(['/dashboard'])
    })

    this.createForm = new FormGroup({
      title: new FormControl(''),
      categoryId: new FormControl(0),
      image: new FormControl(''),
      content: new FormControl(''),
    })
  }

}
