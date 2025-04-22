import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async inscription(fullName: string, email: string, password: string) {
    const data = {
      fullName: fullName,
      email: email,
      password: password
    }
    let rep = fetch('http://localhost:3333/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())

    return rep
  }

  async connexion(email: string, password: string): Promise<UserLogin> {
    const data = {
      email: email,
      password: password
    }
    let rep = fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())

    return rep
  }

  async deconnexion() {
    const auth:UserLogin = JSON.parse(localStorage.getItem('auth')??'')

    if(auth.token.token){
      let rep = await fetch('http://localhost:3333/logout', {
        method: 'POST',
        headers: {
          "authorization": "Bearer "+auth.token.token
        }
      }).then(response => response.json())

      return rep
    }
  }
}
