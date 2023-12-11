import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username : {
        type: String,
        required:[true,'Username is required']
    },
    email :{
        type : String,
        required : [true , 'please provide a email'],
        unique : true
    },
    password : {
        type : String,
        required :[true , 'please provide a passowrd    x']
    },
    isAdmin : {
        type:Boolean,
        default:false
    },
    isVerified :{
        type : boolean ,
        default : false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiry: Date,
    verifyToken : String ,
    verifyTokenExpiry:Date
})

const User=mongoose.model.users || mongoose.model('users',userSchema);

export default User;