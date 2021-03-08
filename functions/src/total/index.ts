import * as functions from 'firebase-functions'
import * as admin from "firebase-admin"
admin.initializeApp()

const db = admin.firestore();

export const costCount = functions.firestore.document('Receipts/{ReceiptsId}')
  .onCreate(async (snapshot, context) => {
    const ReceiptsCollection = snapshot.data();
    // can track users here
    const runningCost = db.doc('RunningCost/total');
    const runnDoc = await runningCost.get();
    const runnData = runnDoc.data();

    const next = {
      total: runnData!.totalCost +  ReceiptsCollection.cost,
      count: runnData!.count + 1
    }

    
    runningCost.update({
      next 
    })
    return next
  });