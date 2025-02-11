import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  service: UserService = inject(UserService)
  router: Router = inject(Router)

  connexionForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  login() {}

}
