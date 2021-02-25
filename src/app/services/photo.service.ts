import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';



class Photo {
  description?: string;
  id?: any;
  data?: any;
  imageData?: any;
  uriTest?: any;
}
export interface DevPic { title: string, cost: number, id?:string, description: string, picture: string,created: string, updated: string, downloadURL: string, path: string}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  id = "photos"
  count = 1
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  itemCollection: AngularFirestoreCollection<DevPic>;
  

  constructor(private camera: Camera, private storage: Storage, private db: AngularFirestore, private afs: AngularFireStorage) { 

    this.itemCollection = db.collection<DevPic>("newcollection");

  }


  
  takePicture() {
    console.log("doing this thing now")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageURI) => {
      // Add new photo to gallery
      console.log("doing this now")
      this.photos.unshift({
        description: "somthing here. I would like to know how to edit this. how do i edit ionic storage once saved. pain in my ass ",
        id: Date(), 
        imageData: imageURI,
        data: 'data:image/jpeg;base64,' + imageURI,
      });
      this.count ++ 

      // Save all photos for later viewing
      this.storage.set(this.id , this.photos);
      console.log(this.photos)
      //firestore 
      const path = `receipts/${Date.now()}.jpeg`
      const ref = this.afs.ref(path)
      var pictureLoad = this.photos[0].data
      //main task
      ref.putString(pictureLoad, `data_url`).then((snapshot) => {
        console.log('Uploaded a data_url string!');
    });
    // this.afs.upload(path, this.photos[0].imageData)
    console.log(this.photos[0].id, "Uploading this image")
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.itemCollection.add({ });
      }),
    );
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }

  // isActive(snapshot) {
  //   return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  // }

  startUpload(){
    const path = `receipts/${Date.now()}.jpeg`
    const ref = this.afs.ref(path)
    var pictureLoad = this.photos[0].data
    //main task
    ref.putString(pictureLoad, `data_url`).then((snapshot) => {
      console.log('Uploaded a data_url string!');
    });
    // this.afs.upload(path, this.photos[0].imageData)
    console.log(this.photos[0].id)
  }


  loadSaved() {
    console.log("loaded pictures " )
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  removePic()  {
    console.log(this.photos[0].data)
    
  }

  removeAllKey(){
    this.storage.remove("photos")
  }

  test(){
    console.log(this.photos)
  }
  addCount(){
    this.count ++ 
    console.log(this.count)
    return this.count
  }

}
