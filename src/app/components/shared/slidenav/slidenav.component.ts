import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../../services/authFirebase.service';
import { FirebasedbService } from '../../../services/firebasedb.service';
import { Usuario } from '../../../interfaces/usuario';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.css']
})
export class SlidenavComponent implements OnInit {

  //usuario:Usuario;

  navopened: boolean;

  constructor( private _authUser:AuthFirebaseService, 
               private _firebasedb:FirebasedbService ) { }

  ngOnInit() {
    /*this._authUser.getAuth().subscribe( (user) => { 

    });*/

  }

  login( type:string ){
    this._authUser.login( type );
  }

  logout(){
    this._authUser.logout();
  }

}
