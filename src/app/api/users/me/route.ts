import { getTokenData } from "@/helpers/getTokenData";

import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import connect from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {

        const userID= await getTokenData(request);
        const user=await User.findOne({_id:userID}).select("-password");
        return NextResponse.json({
            message:"user Found",
            data:user
        },
        {status:200})
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:401})
    }
}