import express  from "express";
const router = express.Router()
import Exp from '../Schema/expSchema.js'
import User from "../Schema/userSchema.js";
import authenticateJWT from "../MiddleWare/Auth.js";
router.get('/exp',authenticateJWT,async(req,res)=>{
    const exp=await Exp.find()
    return res.json({exp})
})
router.post('/exp',authenticateJWT,async (req,res)=>{
   const {company,desc,batch,role}=req.body
   if(!company||!desc||!batch){
    res.send(404).json({message:"Please Enter all Fields"})
   }
   const newExp=new Exp({
    company,
    desc,
    batch,
    role,
    postedBy: req.user.id
   })
   newExp.save()
   return res.json({
    newExp
   })
})
router.put('/exp/:id',authenticateJWT,(req,res)=>{
    const {company,desc,batch}=req.body
    Exp.findByIdAndUpdate(req.params.id,{company,desc,batch,role}).then(res.json({message:"Experience Updated"}))
})

router.delete('/exp/:id',authenticateJWT,(req,res)=>{
    Exp.findByIdAndDelete(req.params.id).then(res.json({message:"Experience Deleted"}))
})



router.get("/exp/myexp",authenticateJWT,async (req,res)=>{
    const resp = await Exp.find({postedBy: req.user.id});
    res.json({res: resp});
})
 export default router