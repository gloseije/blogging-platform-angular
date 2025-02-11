import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  service: UserService = inject(UserService)
  router: Router = inject(Router)

  inscriptionForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  save() {}

}
