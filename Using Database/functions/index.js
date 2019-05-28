const functions = require('firebase-functions');
var admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

var firestore = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.webhook = functions.https.onRequest((request, response) => {

  console.log("request.body.result.parameters: ", request.body.result.parameters);
    let params = request.body.result.parameters;

    var docRef = db.collection('orders');
    docRef.add(params).then(()=>{
        response.send({
            speech:`${params.name} Your hotel booking for ${params.persons} have been booked and you will get reply soon at ${params.email}`
           });

    });

    .catch((e=>{
        response.send({
            speech: "not shwoing response"
           });
    }));
       
 });