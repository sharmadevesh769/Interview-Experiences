import mongoose from 'mongoose'
const Schema=mongoose.Schema;

 const expSchema=new mongoose.Schema({
    company:{
        type:String,
        required: true
    },desc:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
 })
export default mongoose.model('Exp',expSchema)