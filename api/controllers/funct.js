import { data } from "../models/user.js";
import bcrypt from 'bcrypt';

import { sendtoken } from "../utils/features.js";
import { Covid_data } from "../models/Covid_data.js";



export const register = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const hashpassword = await bcrypt.hash(password, 10);
      const user = await data.create({ name, email, password: hashpassword });
  
      sendtoken(res, user, "User registered successfully", 201);
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        return res.status(400).json({
          success: false,
          message: "User with this email already exists.",
        });
      } else {
        // Handle other errors
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
    }
  };
  

export const login = async(req,res)=>{

    const {email,password} = req.body;

    let user = await data.findOne({email})

    if(!user) return res.status(404).json({
        success:false,
        message:"Invalid Email or Password",
    })

    const isMatched = await bcrypt.compare(password,user.password)

    if(!isMatched) return res.status(404).json({
        success:false,
        message:"Invalid Email and Password",
    })

    sendtoken(res,user,`welcome back , ${user.name}`,201)

}



export const getMyprofile = (req, res) => {
  try {
    if (!req.user) {
      // If req.user is not available, consider logging the issue
      console.error('User not found in getMyprofile function');
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.error('Error in getMyprofile function:', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

  

export const logout = (req,res)=>{

    res.status(201).cookie("token",null,{
        expires:new Date(Date.now()),   
    }).json({
        success:true,
        message:"Logout successfully"
    })

}

export const Testing = async (req, res) => {
  const { name, email, Mo_No, dob, aadhar, address, blood, state ,testing} = req.body;

  try {
    await Covid_data.create({
      name,
      email,
      Mo_No,
      dob,
      aadhar,
      address,
      blood,
      state,
      testing
    });

    res.status(201).json({
      success: true,
      message: 'Data created successfully',
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Validation Fail"
      });
    } else {
      // Handle other errors
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
      });
    }
  }
};


