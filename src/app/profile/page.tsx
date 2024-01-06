"use client"

import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function Profile(){

    const router=useRouter()

    const logout=async()=>{
            try {
                await axios.get("/api/users/logout");
                toast.success("login successfull ")
                router.push("/login")
            } catch (error:any) {
                console.log(error.message);
                toast.error(error.message)
            }
    }

    return(
        <div className="text-4xl">
            <p>User Profile</p>
            <button className="bg-neutral-200 p-10" onClick={logout}>Logout</button>
        </div>
    )
}