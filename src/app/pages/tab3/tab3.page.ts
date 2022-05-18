import { Component } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  // public photoService: PhotoService

  constructor(public photoService: PhotoService, public storage: Storage) {
  
}


  ngOnInit() {
  }
}

