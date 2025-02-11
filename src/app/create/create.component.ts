import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  service: PostService = inject(PostService)
  router: Router = inject(Router)

  createForm = new FormGroup({
    title: new FormControl(''),
    categoryId: new FormControl(1),
    image: new FormControl(''),
    content: new FormControl(''),
  })

  save() {

  }

}
