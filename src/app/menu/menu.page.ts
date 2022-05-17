import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth} from "@angular/fire/auth"
import firebase from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

  pages = [
    {
      title: "Home Page",
      url: "/menu/home",
      icon: "home",
      vertical: "top"
    },
    {
      title: "Poland trip",
      url: "/menu/gallery",
      icon: "receipt",
      vertical: "top"
    },
    {
      title: "Poland Trip Minimised",
      url: "/menu/receipts-test",
      icon: "receipt",
      vertical: "top"
    },
    {
      title: "Dev Environment ",
      url: "/menu/dev",
      icon: "code",
      vertical: "top"
    },    
  ];

  selectedPath = "";

  constructor(private menu: MenuController, private router: Router, public auth: AngularFireAuth) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}

