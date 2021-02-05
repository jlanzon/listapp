import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Todo, TodoDB } from "../../models/todo"
import { Item } from "../../models/item"
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
import { timestamp } from 'rxjs/operators';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})

export class TodoPage implements OnInit {
todoCollection: AngularFirestoreCollection<Todo>;
  _db:AngularFirestore;
  todo: Observable<Todo[]>;
  todos;
  newContentdata: any;
  testData=[];
  itemsCollection: AngularFirestoreCollection<Item>;
  items:Observable<Item[]>
  todot: Item[];

  constructor(
    public itemService: ItemService,
    private afs: AngularFirestore,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth, 
    ) { 
    // this.afAuth.signInAnonymously();
    this.todo = db.collection('todo').valueChanges();
    this._db = db;
    this.items = this.afs.collection("items").valueChanges();
  }

  

  ngOnInit() {
    this.todoCollection = this.afs.collection("todo", ref => {
      return ref.orderBy("cost", "desc") //.limit(10)
    }) //ref
      // console.log(items);
      // this.itemsCollection = this.afs.collection("items") //observe data changes
      // this.todoCollection = this.afs.collection("todo")
  }

  newContent(tTitle: string, tPrice: number){
    console.log(tTitle, tPrice)
    this.itemsCollection.add({title: tTitle, cost: tPrice})
  }

  newTodo(todoTitle: string, todoPrice: number, tododescription: string){
    console.log(todoTitle,tododescription, todoPrice)
    this.todoCollection.add({title:todoTitle,description:tododescription,cost: todoPrice})
  }

  


}
