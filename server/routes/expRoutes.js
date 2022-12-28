import express  from "express";
const router = express.Router()
import Exp from '../Schema/expSchema.js'
import User from "../Schema/userSchema.js";
import authenticateJWT from "../MiddleWare/Auth.js";
router.get('/exp',authenticateJWT,async(req,res)=>{
    const exp=await Exp.find()
    const {_id}=req.user
    // User.findById(_id).then(user=>console.log(user))
    // // return res.json(user)
    return res.json({exp})
})
router.post('/exp',authenticateJWT,(req,res)=>{
    const {_id} = req.user;
   const {company,desc,batch}=req.body
   const newExp=new Exp({
    company,
    desc,
    batch,
    userId: _id,
   })
   newExp.save()
   return res.json({
    newExp
   })
})
router.put('/exp/:id',authenticateJWT,(req,res)=>{
    const {company,desc,batch}=req.body
    Exp.findByIdAndUpdate(req.params.id,{company,desc,batch}).then(res.json({message:"Experience Updated"}))
})
router.delete('/exp/:id',authenticateJWT,(req,res)=>{
    Exp.findByIdAndDelete(req.params.id).then(res.json({message:"Experience Deleted"}))
})

// router.post("/exp/me/add",authenticateJWT,async (req,res)=>{

//     const {_id} = req.user;
//     const {company,batch,desc} = req.body;
//     const postExp = new 

//     Exp.findByIdAndUpdate(req.params.id,{company,desc,batch}).then(res.json({message:"Experience Updated"}))
// })



router.get("/exp/me",authenticateJWT,async (req,res)=>{
    const {_id} = req.user;
    const resp = await Exp.find({userId: _id});
    res.json({res: resp});
})
 export default router