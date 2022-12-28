import express  from "express";
const router = express.Router()
import authenticateJWT from "../MiddleWare/Auth.js";
router.get('/res',authenticateJWT,(req,res)=>{
    res.send("RESOURCES")
})

export default router