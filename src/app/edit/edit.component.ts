import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  service: PostService = inject(PostService);
  router: Router = inject(Router);

  editForm = new FormGroup({
    title: new FormControl(''),
    categoryId: new FormControl(1),
    image: new FormControl(''),
    content: new FormControl(''),
  });

  ngOnInit() {}

  edit() {}
}
