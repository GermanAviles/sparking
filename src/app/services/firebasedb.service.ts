import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Estacionamiento } from '../interfaces/estacionamiento';


@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  private itemsCollection: AngularFirestoreCollection<any>;

  public pestaciona: Estacionamiento[] = [];

  constructor( private afs: AngularFirestore ) {

    
    //console.log("desde el servicio constructor");
    //this.cargarEstacionamientos();
  }

  cargarEstacionamientos(){
    
    //console.log("desde Cargar Estacionamiento")
    
    this.itemsCollection = this.afs.collection<Estacionamiento>('estacionamientos');

    return this.itemsCollection.valueChanges()
                               .pipe( map ( (estacionamientos:Estacionamiento[])=> {

                                  console.log(estacionamientos);

                                  this.pestaciona = [];

                                  estacionamientos.forEach(estacionamiento => {
                                    this.pestaciona.push( estacionamiento );
                                  });


                               }) );

  }
}
