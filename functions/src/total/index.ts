import * as functions from 'firebase-functions'
import * as admin from "firebase-admin"
admin.initializeApp()

const db = admin.firestore();

export const costCount = functions.firestore
  .document('Receipts/{ReceiptsId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.data()
    const dataCost = data.cost
    // can track users here
    const runningCost = db.doc('RunningCost/total');
    const runnDoc = await runningCost.get();
    const runnData = runnDoc.data();

    // const next = {
    //   total: runnData.totalCost + dataCost.cost 
    // }

    return runningCost.update({
      totalCost: runnData?.totalCost + dataCost.cost 
    })
  });