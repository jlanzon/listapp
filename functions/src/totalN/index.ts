// import * as functions from 'firebase-functions'
// import * as admin from "firebase-admin"
// admin.initializeApp()

// const db = admin.firestore();

// export const costCountNew = functions.firestore.document('Receipts/{ReceiptsId}')
//   .onWrite(async (snapshot, context) => {
//     const ReceiptsCollection = snapshot.after.data()
//     // can track users here
//     const runningCost = db.doc('RunningCost/total');
//     const runnDoc = await runningCost.get();
//     const runnData = runnDoc.data();
//     //adding receipt
//     const cost = runnData!.totalCost + ReceiptsCollection!.cost
//     const count = runnData!.count + 1

//     runningCost.update({ 
//       totalCost: cost,
//       docCount: count })
//   });

