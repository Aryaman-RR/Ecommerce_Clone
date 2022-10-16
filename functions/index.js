const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { request } = require("express");
const stripe = require("stripe")(
    'sk_test_51LXdccSIfEzmJAPjdlBwWHZkM2USG4nJXwF8Nw6v8189INGvGU9wzc2wiReB3hMGamkJ7cR47ECOTnf0R3PoKMVX00pY7oy47T'
);

// App

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received ->', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "inr",
    });

    // Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-10473/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
