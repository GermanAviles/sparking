import { Component, OnInit } from '@angular/core';
import { FirebasedbService } from '../../services/firebasedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  API_KEY_:string = "AIzaSyCsHFrviCiGrSM1lWWD7cREtEjNiKD4uV8";

  latitud = 2.963140;
  longitud = -75.309089;
  
  constructor( private _firebasedb: FirebasedbService ) {
    console.log("Estacionamientos: ");
    console.log( this._firebasedb.cargarEstacionamientos().subscribe() );
    //var url:string = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY_}&callback=initMap`
  }

  ngOnInit() {
  }

  localizacion( evento ){
    console.log(evento);
  }

}
