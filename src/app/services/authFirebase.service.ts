import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {


  constructor( private afAuth: AngularFireAuth ) {

  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  logout(){    
    this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }


}
