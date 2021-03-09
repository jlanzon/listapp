import * as functions from 'firebase-functions'
import * as admin from "firebase-admin"
admin.initializeApp()

const db = admin.firestore();

export const costCountDelete = functions.region("europe-west2").firestore.document('Receipts/{ReceiptsId}')
  .onDelete(async (change, context) => {
    admin.firestore().collection("Receipts").get().then(queryChange => {
      const receiptCount = queryChange.size
      const numbers: number[] = []
      queryChange.forEach(doc => { 
        const ting = doc.data().cost
        numbers.push(ting)
    })
      const addThis = numbers.reduce((a, b) => a + b, 0)
    const runningCost = db.doc('RunningCost/total');
    runningCost.update({
      totalCost: addThis,
      count: receiptCount
    })
    console.log("costCountDelete Fired")
  })
});

export const costCount = functions.region("europe-west2").firestore.document('Receipts/{ReceiptsId}')
  .onCreate(async (snapshot, context) => {
    const ReceiptsCollection = snapshot.data()
    const runningCost = db.doc('RunningCost/total');
    const afs = admin.firestore().collection("Receipts")
    const runnDoc = await runningCost.get();
    const runnData = runnDoc.data();
    const cost = runnData!.totalCost + ReceiptsCollection!.cost
    afs.get().then(queryChange => { 
      const tin = queryChange.size;
      runningCost.update({ 
        totalCost: cost,
        count: tin
      });
      console.log("costCount Fired", "new cost is,", cost, "count is", tin)
    });
  });

  export const costCountupdate = functions.region("europe-west2").firestore.document('Receipts/{ReceiptsId}')
  .onUpdate(async (change, context) => {
    admin.firestore().collection("Receipts").get().then(queryChange => {
      const receiptCount = queryChange.size
      const numbersforupdate: number[] = []
      queryChange.forEach(doc => { 
        const ting = doc.data().cost
        numbersforupdate.push(ting)
    })
      const addThis = numbersforupdate.reduce((a, b) => a + b, 0)
    const runningCost = db.doc('RunningCost/total');
    runningCost.update({
      totalCost: addThis,
      count: receiptCount
    })
    console.log("costCountUpdate Fired")
  })
});
