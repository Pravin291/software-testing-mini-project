
import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true,
    },
    description:{
     type:String,
     required:true,
     default:false,
    },
    iscomleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"nodeapi",
        required:true,
    },
    cretedAt:{
      type:Date,
      default:Date.now,
    }
  })

  export const Task = mongoose.model('taks',userSchema);

  