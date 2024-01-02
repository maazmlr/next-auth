import connect from "@/dbConfig/dbConfig";
import User from '@/models/userModel'

import { NextRequest,NextResponse } from "next/server";
import bcryptjs from 'bcrypt'


connect()

export  async function POST(request:NextResponse) {
    try {
        const reqBod=await request.json();
        const {username,email,password}=reqBod;


        const user=await User.findOne({email});

        if(user){
            return NextResponse.json({message:'user Already exist '},{status:400});
        }

        const salt=await bcryptjs.genSalt(10);
        const hashPassword=await bcryptjs.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password: hashPassword
        })
        const savedUser=await newUser.save();

        console.log(savedUser);
        console.log(reqBod)

        return NextResponse.json({message:'User Created Successfully',success:true,savedUser},{status:201})




       
    } catch (error :any) {
        return NextResponse.json({message:error.message},{status:500})
    }
    
} 