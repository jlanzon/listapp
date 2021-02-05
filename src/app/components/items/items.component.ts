import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../services/item.service"
import { Item } from "../../models/item"
import { DbService } from '../../services/db.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items: Item[];
  itemsdb: Observable<Item[]>
  itemsCollection: AngularFirestoreCollection<Item>
  snapshot: any;


  constructor(
    private itemService: ItemService,
    public db: DbService,
    private afs: AngularFirestore,
    ) { 
      this.itemsdb = this.afs.collection('items').snapshotChanges().pipe(map(changes => {
        return changes.map(a=>{
          const data = a.payload.doc.data() as Item
          data.id = "asdasda";
          return data;
        });
      }));
    }

  ngOnInit() {
    this.itemService.getItems().subscribe(itemsdb => {
      this.items = itemsdb;
      console.log(itemsdb);
    });

    this.itemsCollection = this.afs.collection("items");

  }

  trackById(idx, todo) {
    return todo.id;
  }

  deleteTodo(item){
    console.log(`items/${item.id}`);
  }
}
