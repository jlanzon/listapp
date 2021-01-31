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
      icon: "home",
      vertical: "top"
    },
    {
      title: "Gallery",
      url: "/menu/gallery",
      icon: "images",
      vertical: "top"
    },
    {
      title: "Receipts-test",
      url: "/menu/receipts-test",
      icon: "code-working",
      vertical: "top"
    },
    {
      title:"receipt",
      url: "/menu/receipt",
      icon: "list",
      vertical: "top"
    },
    {
      title:"Receipts-Details",
      url: "/menu/receipts-details/:id",
      icon: "list-box",
      vertical: "top"
    }
    
  ];

  selectedPath = "";

  constructor(private menu: MenuController, private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
}

