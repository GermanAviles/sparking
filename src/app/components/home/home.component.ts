import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '../../services/firebasedb.service';
import { AuthFirebaseService } from '../../services/authFirebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  API_KEY_:string = "AIzaSyCsHFrviCiGrSM1lWWD7cREtEjNiKD4uV8";

  latitud = 2.963140;
  longitud = -75.309089;
  
  constructor( private _firebasedb: FirebasedbService,
               private _authuser: AuthFirebaseService ) {
    console.log("Estacionamientos: ");
    console.log( this._firebasedb.cargarEstacionamientos().subscribe() );
    //var url:string = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY_}&callback=initMap`
  }

  ngOnInit() {

    /*this._authuser.getAuth().subscribe( (auth)=> {
      if( auth )
        console.log( "Usuario Autenticado: ", auth );
        //almacenar los datos del usuario en una variable y utilizar la info mientras esté autenticado
    });*/
  }

  localizacion( evento ){
    console.log(evento);
  }

  ingresar(){
   this._authuser.login('fb');
  }

  cerrarSesion(){
   this._authuser.logout();
  }

}
