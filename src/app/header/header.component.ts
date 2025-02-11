import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenu: boolean = false //Afficher et masquer le menu déroulant mobile
  profileMenu: boolean = false //Afficher et masquer le menu du profil

  ngOnInit() {}
  
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
