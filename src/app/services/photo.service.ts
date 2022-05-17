import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { pathToFileURL } from 'url';



class Photo {
  description?: string;
  id?: any;
  data?: any;
  imageData?: any;
  uriTest?: any;
}
export interface Receipt { title?: string, cost?: number, id?:string, description?: string, picture?: string,created?: string, updated?: string, downloadURL?: any, path?: string}
export interface ReceiptID extends Receipt { id: string;}
export interface Price { totalCost?: number, cost?: number }
export interface PriceCap { totalCost: number, count: number, cost: number}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  id = "photos"
  count = 1
  task:  any;
  percentage: Observable<number>;
  snapshotdb: Observable<any>;
  downloadURL: Observable<any>;
  itemCollection: AngularFirestoreCollection<Receipt>;
  priceCollection: AngularFirestoreCollection<Price>;
  receipts: Observable<ReceiptID[]>;
  countCost: Observable<any[]>
  priceCrap: Observable<any[]>;
  item: Observable<Receipt[]>;
  costCal: number[] = []
  uploadProgress: Observable<number>
  isUploading: boolean = false

  //edit items
  editState: boolean = false
  itemToEdit: Receipt;
  //fin

  constructor(private camera: Camera, private storage: Storage, private db: AngularFirestore, private afs: AngularFireStorage) { 



    this.itemCollection = db.collection<Receipt>("Receipts", ref => ref.orderBy("created"));
    this.priceCollection = db.collection<Price>("RunningCost");
    this.countCost = this.priceCollection.valueChanges()
    // this.item = this.itemCollection.valueChanges();
    this.receipts = this.itemCollection.snapshotChanges()                  
    .pipe(map(actions => actions.map( a => {  
      const data = a.payload.doc.data()as Receipt; 
      const id = a.payload.doc.id;
      const ItemsToAdd = data.cost
      this.costCal.push(ItemsToAdd)
      return {id, ...data}
    }))
    );
    console.log("Loaded DevPic Lib")
    console.log(this.costCal )
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
        id: Date.now(), 
        imageData: imageURI,
        data: 'data:image/jpeg;base64,' + imageURI,
      });
      this.count ++ 
      // Save all photos for later viewing
      this.storage.set(this.id , this.photos);
      console.log(this.photos)
      this.isUploading = true
      //firestore 
      const path = `receipts/${Date.now()}.jpeg`
      const ref = this.afs.ref(path)
      var pictureLoad = this.photos[0].data
      //main task
      const task = ref.putString(pictureLoad, `data_url`).then((snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100
        console.log("Upload is", progress, "% done.")
        console.log('Uploaded a data_url string!');
        console.log("Upload is", progress, "% done.")
        
        snapshot.ref.getDownloadURL().then((downloadURL)=> {
          console.log("File Download link:", downloadURL)
          this.isUploading = false
          this.itemCollection.add({downloadURL: downloadURL, created: Date(), cost: 0, description: "Description not found", path: path})
          this.storage.remove("photos")
        })
      });
    console.log(this.photos[0].id, "Uploading this image",)
    }, (err) => {
     console.log("Camera issue: " + err);
    });
  }

  uploadPicture() {
    console.log("doing this thing now")
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
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
        id: Date.now(), 
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
      this.task = ref.putString(pictureLoad, `data_url`).then((snapshot) => {
        console.log("Upload is", progress, "% done.")
        this.isUploading = true
        console.log('Uploaded a data_url string!');
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) 
        console.log("Upload is", progress, "% done.")
        this.percentage = this.uploadProgress
        snapshot.ref.getDownloadURL().then((downloadURL)=> {
          console.log("File Download link:", downloadURL)
          this.itemCollection.add({downloadURL: downloadURL, created: Date(), cost: 0, description: "Null", path: path})
          this.storage.remove("photos")
        })
      });
      
    console.log(this.photos[0].id, "Uploading this image")
    this.isUploading = false
    this.percentage = this.task.percentageChanges();
    }, (err) => {
     console.log("Camera issue: " + err);
    });
  }


  // uploadTest(event) {
  //   const file = event.target.files[0];
  //   const filePath = `receipts/${Date.now()}.jpeg`
  //   const fileRef = this.afs.ref(filePath);
  //   const task = this.afs.upload(filePath, file);

  //   // observe percentage changes
  //   const uploadProgressbefore = task.percentageChanges();
  //   this.uploadProgress = uploadProgressbefore 
  //   console.log(uploadProgressbefore)
  //   // get notified when the download URL is available
  //   task.snapshotChanges().pipe(
  //       finalize(() => this.downloadURL = fileRef.getDownloadURL() )
  //    )
  //   .subscribe()
  // }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }


  // loadSaved() {
  //   console.log("loaded pictures " )
  //   this.storage.get('photos').then((photos) => {
  //     this.photos = photos || [];
  //   });
  // }

  removePic(photo)  {
    console.log("working on it", photo)
    this.itemCollection.doc(photo.id).delete()
    const photoDelete = this.afs.storage.ref(photo.path)
    console.log(photo.path)
    photoDelete.delete().then(() =>{
      console.log("File Deleted")
    }).catch((error) => {
      console.log(error)
    })
  }

  itemEdit:any = {};
  editItem(i){
    console.log("Working on editing", i)
    this.editState = true;
    this.itemToEdit = i;
    
  }
  downloadPic(){
    
  }

  removeAllKey(){
    this.storage.remove("photos")
  }

  addCount(){
    this.count ++ 
    console.log(this.count)
    return this.count
  }

  clearState(i){
    this.editState = false;
    this.itemToEdit = null;
    console.log("closed", i) 
  }

  updateItem(i: Receipt, updatedtitle,updateddescription , updatedCost: number ){
    this.clearState(i)
    const updatedItem = {title: updatedtitle,description: updateddescription, cost: updatedCost, updated: Date()};
    return this.itemCollection.doc(i.id).update(updatedItem);
  }

  
  updateCost(){
    console.log("1")
    this.itemCollection.ref.id
    // for tomorrow
    //https://fireship.io/lessons/star-ratings-system-with-firestore/
    console.log("2")
  }

}
