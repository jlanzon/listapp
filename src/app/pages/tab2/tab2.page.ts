import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
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
    
  }
}