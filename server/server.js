require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const URI = process.env.MONGO_URI;

const googleclient = new OAuth2Client(GOOGLE_CLIENT_ID);

let DB;
try {
  // Connect to the MongoDB cluster
  mongoclient.connect();
  console.log("Connected to MongoDB !");
  DB = mongoclient.db("resumebuilder");
} catch (e) {
  console.error(e);
}

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const pdfTemplate = require("./documents");

const options = {
  height: "42cm",
  width: "35.7cm",
  timeout: "6000",
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
