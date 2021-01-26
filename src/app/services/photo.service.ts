import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor(private camera: Camera, private storage: Storage) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      console.log("doing this now")
      this.photos.unshift({
        description: "somthing here. I would like to know how to edit this. how do i edit ionic storage once saved. pain in my ass ",
        id: 1,
        data: 'data:image/jpeg;base64,' + imageData,
      });

      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
      console.log(this.photos)
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });


  }

  loadSaved() {
    console.log("loaded pictures " )
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  removePic(id: number)  {
    console.log(this.photos[id])
    console.log(1)
    this.photos = this.photos.filter( photos => photos.id != id)
  }

  removeAllKey(){
    this.storage.remove("photos")
  }

}

class Photo {
  description: any;
  id: any;
  data: any;
}
