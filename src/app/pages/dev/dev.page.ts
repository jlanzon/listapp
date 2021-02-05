import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface DevItem { title: string, cost: number, id?:string}
export interface DevItemID extends DevItem { id: string; }
export interface DevItemNew { title: string, cost: number}

@Component({
  selector: 'app-dev',
  templateUrl: './dev.page.html',
  styleUrls: ['./dev.page.scss'],
})
export class DevPage implements OnInit {
  // item collections and fields 
  itemCollection: AngularFirestoreCollection<DevItem>;
  item: Observable<DevItem[]>;
  devitem: Observable<DevItemID[]>;
  newItem: Observable<DevItemNew[]>;

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

  deleteItem(i){
    console.log("Running")
    console.log(i.id)
    return this.itemCollection.doc(i.id).delete();
  }// FUCKING WINNER, this simple code took ages!!!! 

    //edit items
    editState: boolean = false
    itemToEdit: DevItem;

  editItem(i){
    console.log("Working on editing", i)
    this.editState = true;
    this.itemToEdit = i;
  }

  updateItem(i: DevItem, updatedtitle, updatedCost ){
    this.clearState(i)
    const updatedItem = {title: updatedtitle, cost: updatedCost};
    return this.itemCollection.doc(i.id).update(updatedItem);
  } //worked this one out on my own 

  clearState(i){
    this.editState = false;
    this.itemToEdit = null;
    console.log("closed", i)
  }

  createItem(title: string, cost: number){
    return this.itemCollection.add({title: title, cost: cost})
  }

  ngOnInit() {
  }

}