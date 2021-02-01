import { Component, OnInit } from '@angular/core'; 
import { AngularFireAuth} from "@angular/fire/auth"
import firebase from 'firebase/app'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})


export class ProfilePage implements OnInit {

  constructor(public auth: AngularFireAuth) { }

   public numbers= [
    {
      number: 1,
      row: 1
    },
    {
      number: 2,
      row: 2
    },
    {
      number: 3,
      row: 3
    },
    {
      number: 4,
      row: 1
    },
    {
      number: 5,
      row: 2
    },
    {
      number: 6,
      row: 3
    },
    {
      number: 7,
      row: 1
    }
  ];


  increment() {
    this.numbers.unshift({ number : 1, row: 1});
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }



  ngOnInit() {
  }

}
