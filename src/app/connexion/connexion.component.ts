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

  login() {
    this.service.connexion(
      this.connexionForm.value.email??"",
      this.connexionForm.value.password??""
    ).then(response => {
      localStorage.setItem("auth", JSON.stringify(response))
      this.router.navigate(['/'])
    } ).then(() => location.reload())
    
    this.connexionForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }


}
