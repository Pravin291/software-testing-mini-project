
import jwt from 'jsonwebtoken'

// export const sendtoken = (res,user,message,statuscode=200)=>{
    
//     const token = jwt.sign({_id:user._id},"pravinbhosale")

//     res.status(statuscode).cookie("token",token,{
//         httpOnly:true,
//         maxAge:15*60*1000,
//     }).json({
//         success:true,
//         message,
//     })
// }


export const sendtoken = (res, user, message, statuscode = 200) => {
    const token = jwt.sign({ _id: user._id }, "pravinbhosale");


    res.status(statuscode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
    }).json({
        success: true,
        message,
    });
}
