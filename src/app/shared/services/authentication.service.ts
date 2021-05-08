import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { IUserLogin } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
  ) {}

  signIn(user: IUserLogin) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password)
  }

  signUp(user: IUserLogin) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    })
  }
  
}
