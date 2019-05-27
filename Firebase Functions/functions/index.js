const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.helloWorld = functions.https.onRequest((request, response) => {
      response.send("Hello world Functions!");
 });

 exports.helloWorld2 = functions.https.onRequest((request, response) => {
    response.send("Hello world 2!");
});

exports.helloWorld3 = functions.https.onRequest((request, response) => {
    response.send("Hello world 3!");
});
