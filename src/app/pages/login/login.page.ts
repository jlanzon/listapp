import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }
    login() {
      this.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
    }
    logout() {
      this.auth.signOut().then(() => {
        location.reload();
      });
    }
  ngOnInit() {
  }



}
