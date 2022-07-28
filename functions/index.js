const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
    "sk_test_51LQDGXIZWq3iaeytgbFH7JG8Sh0o09MRz1eG2ij6XHG6GJhMoEEWReHNvwfZ0aWQmiVxfJKbQZy2TYzjaerS4kt000hSbbLWFp",
)

// API

// - App config
const app = express()

// - Middlewares
app.use(cors({origin: true}))
app.use(express.json())

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
  const total = request.query.total

  console.log("amount >>> ", total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  })

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})


// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/my-shop-27e53/us-central1/api
