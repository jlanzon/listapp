import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from "@angular/fire/firestore";
import { map, take} from "rxjs/operators";
import { Observable, observable } from "rxjs";

export interface Receipt {
  id?: string,
  name: string,
  notes: string
}


@Injectable({
  providedIn: 'root'
})

export class ReceiptService {
  private receipts: Observable<Receipt[]>;
  private receiptCollection: AngularFirestoreCollection<Receipt>;

  constructor(private aft: AngularFirestore) { 
    this.receiptCollection = this.aft.collection<Receipt>("receipts");
    this.receipts = this.receiptCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getReceipts(): Observable<Receipt[]> {
     return this.receipts;
   }

   getReceipt(id: string): Observable<Receipt> {
     return this.receiptCollection.doc<Receipt>(id).valueChanges().pipe(
       take(1),
       map(receipt => {
        receipt.id = id;
        return receipt
       })
     );
   }

   addReceipt(receipt: Receipt): Promise<DocumentReference> {
    return this.receiptCollection.add(receipt);
   }
   updateReceipt(receipt: Receipt): Promise<void> {
    return this.receiptCollection.doc(receipt.id).update({ name: receipt.name, notes: receipt.notes });
   }
   deleteReceipt(id: string): Promise<void> {
    return this.receiptCollection.doc(id).delete();
   }
}
