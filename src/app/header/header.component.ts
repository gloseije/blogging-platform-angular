import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserLogin } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenu: boolean = false //Afficher et masquer le menu déroulant mobile
  profileMenu: boolean = false //Afficher et masquer le menu du profil

  service:UserService = inject(UserService)
  router:Router = inject(Router)
  auth!: UserLogin
  isConnected: boolean = false 

  ngOnInit() {
    if(localStorage.getItem('auth')) {
      this.auth = JSON.parse(localStorage.getItem('auth')??'')
      this.isConnected = true
    }
  }

  deconnexion() {
    this.service.deconnexion().then(rep => {
      if(rep.status == 200) {
        localStorage.clear()
        this.isConnected = false
        this.router.navigate(['/'])
      }
    }).then(()=> {
      location.reload()
    })
  }
  
  //Fonction pour afficher et masquer le menu déroulant mobile
  showMenu() {
    this.mobileMenu = !this.mobileMenu
  }

  //Fonction pour afficher et masquer quand on clique sur le profil
  //L'avatar
  showProfilMenu() {
    this.profileMenu = !this.profileMenu
  }
  
}
