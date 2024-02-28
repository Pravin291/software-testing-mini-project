
import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    email:{
     type:String,
     required:true,
     unique:true
    },
    password:{
      type:String,
      required:true,
      unique:true,
    },
    cretedAt:{
      type:Date,
      default:Date.now,
    }
  })

  export const data = mongoose.model('user_Info',userSchema);

  