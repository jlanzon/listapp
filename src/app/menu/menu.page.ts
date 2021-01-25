import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

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
      icon: ""
    },
    {
      title: "Camera",
      url: "/menu/camera",
      icon: ""
    },
    {
      title: "Receipts",
      url: "/menu/receipts",
      icon: ""
    }
  ];

  selectedPath = "";

  constructor(private menu: MenuController, private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
}

