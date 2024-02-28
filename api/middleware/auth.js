import jwt from 'jsonwebtoken'
import { data } from '../models/user.js';
export const isAuthenticated = async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token) return res.status(404).json({
        success:false,
        message:"Login First",
    })

    const decoded = jwt.verify(token,"pravinbhosale")

   req.user = await data.findById(decoded._id);
   next()
}

