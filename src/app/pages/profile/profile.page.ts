import { Component, Input, OnInit } from '@angular/core'; 
import { AngularFireAuth} from "@angular/fire/auth"
import { Router } from '@angular/router';
import firebase from 'firebase/app'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {

  @Input()
  user;

  constructor(public auth: AngularFireAuth) { }

  login() {
    this.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }



  ngOnInit() {
  }

}
