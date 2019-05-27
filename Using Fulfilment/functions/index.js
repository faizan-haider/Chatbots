const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.webhook = functions.https.onRequest((request, response) => {

  console.log("request.body.queryResult.parameters: ", request.body.queryResult.parameters);
    let params = request.body.queryResult.parameters;
       response.send({
        fulfillmentText:`${params.name} Your hotel booking for ${params.persons} have been booked and you will get reply soon at ${params.email}`
       });
 });
