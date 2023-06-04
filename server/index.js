import express from 'express'
const app = express()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
const PORT=process.env.port||8000
import expRoutes from './routes/expRoutes.js'
import resRoutes from './routes/resRoute.js'
import cors from 'cors'
import path from "path"

// import { MongoClient } from  "mongodb";
// const mongoclient = new MongoClient(process.env.DB_URL);

let DB;
// try {
//   // Connect to the MongoDB cluster
//   mongoclient.connect();
//   console.log("Connected to MongoDB !");
//   DB = mongoclient.db("resumebuilder");
// } catch (e) {
//   console.error(e);
// }
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
import pdfTemplate from  "../documents/index.js";

const options = {
  height: "42cm",
  width: "35.7cm",
  timeout: "6000",
};
app.post("/save", (req, res) => {
    const { user, resume } = req.body;
    delete resume.step;
  
    DB.collection("users")
      .findOne({ email: user.email })
      .then((userDoc) => {
        const USERID = userDoc._id.toString();
        const data = {
          userid: USERID,
          ...resume,
        };
        DB.collection("resume")
          .findOne({ userid: USERID })
          .then((resumeDoc) => {
            if (resumeDoc) {
              DB.collection("resume")
                .deleteOne({ userid: USERID })
                .then(() => {
                  DB.collection("resume")
                    .insertOne(data)
                    .then(() => res.sendStatus(200))
                    .catch((err) => res.send(err));
                })
                .catch((err) => console.log(err));
            } else {
              DB.collection("resume")
                .insertOne(data)
                .then(() => res.sendStatus(200))
                .catch((err) => res.send(err));
            }
          });
      });
  });
  
  app.post("/get-resume", (req, res) => {
    const { email } = req.body;
    DB.collection("users")
      .findOne({ email: email })
      .then((userDoc) => {
        const USERID = userDoc._id.toString();
        DB.collection("resume")
          .findOne({ userid: USERID })
          .then((resumeDoc) => {
            if (resumeDoc) {
              delete resumeDoc._id;
              delete resumeDoc.userid;
              res.send(resumeDoc);
            }
          });
      });
  });
  
  // POST route for PDF generation....

  
  // GET route -> send generated PDF to client...
  app.get("/fetch-pdf", (req, res) => {
    const file = `${path.resolve(path.dirname(''))}/Resume.pdf`;
    res.download(file);
  });
app.use('/api',userRoutes)
app.use('/api',expRoutes)
app.use('/api',resRoutes)
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URL).then(
    app.listen(PORT, () => {
        console.log("Server Connected on 8000")
    })
).catch((err) => {
    console.log("ERROR:", err)
})



