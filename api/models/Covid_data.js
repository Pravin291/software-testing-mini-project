
import mongoose from "mongoose";

export const TestingSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    email:{
     type:String,
     required:true,
     unique:true
    },
     dob:{
      type:Date,
      required:true 
    },
    Mo_No:{
        type:String,
        required:true
      },
      address:{
        type:String,
        required:true
      },
     blood:{
        type:String,
        required:true
      },
      state:{
        type:String,
        required:true
        
      },
       aadhar:{
      type:String,
      required:true,
      unique:true
    },
    testing:{
        type:String,
        required:true
      },
    cretedAt:{
      type:Date,
      default:Date.now,
    }
  })

  export const Covid_data = mongoose.model('TestingForm',TestingSchema);