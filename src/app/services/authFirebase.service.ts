import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';
import { FirebasedbService } from './firebasedb.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  public usuario:Usuario;

  constructor( private afAuth: AngularFireAuth, 
               private _firebasedb:FirebasedbService ) {

  }

  login( type:string ) {

    if( type === 'fb' ){
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
      this.addUser();
    }

    if( type === 'google' ){
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
      this.addUser();
    }

    
  }

  logout(){    
    this.afAuth.auth.signOut();
  }

  /** Obtenemos la sesión actual */
  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  /** Guardar usuario */
  private addUser(){
    this.getAuth().subscribe( (user)=> {
        
      if( user ){
        /*console.log("usuario Autenticado: ");*/
        console.log(user);
        
        this.usuario = {
          uid: user.uid,
          displayName: user.displayName,
          correo: user.email,
          rol: 'ciudadano',
          telefono: user.phoneNumber,
          foto: user.photoURL
        }

        this._firebasedb.addUser( this.usuario );

      }
    });
  }


}
