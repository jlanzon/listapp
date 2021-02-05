import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface DevItem { title: string, cost: number }
export interface DevItemID extends DevItem { id: string; }

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {
  itemCollection: AngularFirestoreCollection<DevItem>;
  item: Observable<DevItem[]>;
  devitem: Observable<DevItemID[]>;
  constructor(private afs: AngularFirestore) {
    
    this.itemCollection = afs.collection<DevItem>("devitem");
    this.item = this.itemCollection.valueChanges();
    this.devitem = this.afs
    .collection("devitem").snapshotChanges()                  
    .pipe(map(actions => actions.map( a => { 
        const data = a.payload.doc.data()as DevItem; 
        const id = a.payload.doc.id;  
        return {id, ...data}
      }))
      );
      console.log("tit")
  }

  deleteItem(i, id:string ){
    console.log("Running")
    console.log(i.id)
    return this.itemCollection.doc(i.id).delete();
  }// FUCKING WINNER, this simple code took ages!!!! 

  createItem(title: string, cost: number){
    return this.itemCollection.add({title: title, cost: cost})
  }

  ngOnInit() {
  }

}