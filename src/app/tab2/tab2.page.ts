import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;

  constructor(public photoService: PhotoService, public storage: Storage) {  }

  ngOnInit() {
    this.photoService.loadSaved();
  }
  removePic(specpic) { 
    console.log(this.storage.keys())
    // this.storage.remove("photos")
    this.storage.get("photos").then(indexOf => {
      
      if (specpic){
          return this.storage.get("photos")
      }
    });
    this.photoService.loadSaved()
}

}