import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  lists= 0;
  receipts = [
    {
      title: "receipt",
      description: "",
      url: "/menu/home",
      icon: ""
    },
    {
      title: "receipt 2",
      description: "",
      url: "/menu/home",
      icon: ""
    },
    {
      title: "receipt 3",
      description: "",
      url: "/menu/home",
      icon: ""
    }
  ];

   increment() {
     this.lists++;
   }

  constructor() { }

  ngOnInit() {
  }
}
