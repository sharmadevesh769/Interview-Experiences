const express =require ('express')
// const bodyParser =require ('body-parser')
const cors =require ('cors')
const mongoose =require ('mongoose')
// const User =require ("./models/user.model.js")
const jwt = require('jsonwebtoken');


const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://intexp:intexp@cluster0.chusd2i.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log('DataBase Connected'))


const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String
})

const User = new mongoose.model("User",userSchema)




app.post("/login",(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if( password === user.password ){
                res.send({message:"Login Successfull",user})
            }else{
                res.send({message:"Incorrect Password"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})
app.post("/register",(req,res)=>{
    const {fname, lname, email, password}=req.body
    User.findOne({email: email},(err,user)=>{
        if(user){
            res.send({message:"User lready Registered"})
        } else {
            const user = new User({
                fname,
                lname,
                email,
                password
            })
            user.save(err=>{
                console.log(err)
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Success"})
                }
            })
        }
    })
    
})


app.listen(9002,()=>{
    console.log("Server at 9002")
})



