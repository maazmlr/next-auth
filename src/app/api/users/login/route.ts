import connect from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import 'dotenv/config'
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcrypt'
import { error } from "console";
import jwt from 'jsonwebtoken'

connect();


export async function POST(request:NextResponse){
    try {
        const reqBody=await request.json();
        const {email,password}=reqBody;
        console.log(reqBody)

        const user= await User.findOne({email});

        if(!user){
            return NextResponse.json({error:"user doesnt exist"},{status:500})
        }
        const validPass=await bcryptjs.compare(password,user.password);
        if(! validPass) {
            return NextResponse.json({error:'wrong password'},{status:400})
        }
        const tokenData={
            id:user._id,
            email:user.email,
            username:user.username
        }
        
        const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:'1d'})
        
        const response=NextResponse.json({
            message:'login successful',
            sucess:true
        })
        response.cookies.set('token',token,{httpOnly:true });

        return  response ;
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}


