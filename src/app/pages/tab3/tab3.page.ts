import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
import { finalize, tap } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';
// import { PhotoService } from '../../services/photo.service';


class Photodev {
  description?: string;
  id?: any;
  imageRename?: any;
  data?: any;
}
export interface DevPic { title: string, cost: number, id?:string, description: string, picture: string,created: string, updated: string}
export interface DevPicID extends DevPic { id: string; }
export interface DevPicNew { title: string, cost: number}


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public photosdev: Photodev[] = [];
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  downloadURL;
  itemCollection: AngularFirestoreCollection<DevPic>;
  item: Observable<DevPic[]>;
  devpic: Observable<DevPicID[]>;
  newItem: Observable<DevPicNew[]>;

  // public photoService: PhotoService

  constructor( public photoService: PhotoService, public camera: Camera, public storage: Storage, private afs: AngularFirestore, private storageafs: AngularFireStorage,) {
    
    this.itemCollection = afs.collection<DevPic>("newcollection");
    this.item = this.itemCollection.valueChanges();
    this.devpic = this.afs
    .collection("newcollection").snapshotChanges()                  
    .pipe(map(actions => actions.map( a => { 
      const data = a.payload.doc.data()as DevPic; 
      const id = a.payload.doc.id;  
      return {id, ...data}
    }))
    );
    console.log("Loaded DevPic Lib")
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
    
    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      console.log("doing this now")
      this.photosdev.unshift({
        description: "somthing here. I would like to know how to edit this. how do i edit ionic storage once saved. pain in my ass ",
        id: 1, 
        imageRename: imageData,
        data: 'data:image/jpeg;base64,' + imageData,
      });

      // Save all photos for later viewing
      this.storage.set('photosdev', this.photosdev);
      const ref = this.storageafs.ref("test/${}");
      // this.itemCollection.add({title: "title", cost: 1, description: "nil", picture: "nothing yet", created: Date(), updated: "No Updates",})
      
      console.log(this.photosdev)
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }
  startUpload() {
    // The storage path
    const path = `test/${Date.now()}_${this.photosdev}`;
    // Reference to storage bucket
    const ref = this.storageafs.ref(path);
    // The main task
    this.task = this.storageafs.upload(path, this.photosdev);
    // Progress monitoring
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.afs.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }

  loadSaved() {
    console.log("loaded pictures " )
    this.storage.get('photos').then((photos) => {
      this.photosdev = photos || [];
    });
  }

  removePic(id: any)  {
    console.log("Removed ID:", this.photosdev[id])
    // this.photos = this.photos.filter( photos => photos.id != id)
  }

  removeAllKey(){
    this.storage.remove("photos")
  }

  deleteItem(i){
    console.log("Running")
    console.log(i.id)
    return this.itemCollection.doc(i.id).delete();
  }// FUCKING WINNER, this simple code took ages!!!! 

    //edit items
    editState: boolean = false
    itemToEdit: DevPic;

  editItem(i){
    console.log("Working on editing", i)
    this.editState = true;
    this.itemToEdit = i;
  }

  updateItem(i: DevPic, updatedtitle, updatedCost ){
    this.clearState(i)
    const updatedItem = {title: updatedtitle, cost: updatedCost, updated: Date()};
    return this.itemCollection.doc(i.id).update(updatedItem);
  } //worked this one out on my own 

  clearState(i){
    this.editState = false;
    this.itemToEdit = null;
    console.log("closed", i)
  }
  nowTime() {
    console.log(Date())
  }

  createItem(title: string, cost: number){
    return this.itemCollection.add({title: title, cost: cost, description: "nil", picture: "nothing yet", created: Date(), updated: "No Updates",})
  }

  ngOnInit() {
  }
}

