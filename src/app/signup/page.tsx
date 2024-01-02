'use client'

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import toast from "react-hot-toast"
const page = () => {
  const router =useRouter()

  const [user,setUser]=React.useState({
    email:'',
    password:'',
    username:""
  });

  const [buttonDisable,setButtonDisable]=useState(false);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisable(false)
    }
    else{
      setButtonDisable(true)
    }
 },[user])

  const onsignUp=async ()=> {
    try {
      setLoading(true);
     const response=await axios.post('/api/users/signup/',user)
      console.log(response?.data);
      router.push('/login')
    } catch (error:any) {
       console.log('signup failed',error.message)
      toast.error(error.message)
    }
    finally{
      setLoading(false)
    }
    

  }

  return (
    <div className="flex flex-col items-center justif-center min-h-screen py-2">

    <h1>{loading ? 'processing ' :'signup'}</h1>
    <label htmlFor="username" className="my-4">username
    
    <input
    className="text-black"
    type="text"
    id="username"
    value={user.username}
    onChange={(e)=>setUser({...user,username:e.target.value})}
    />
    </label>
    <label htmlFor="email" className="my-4">email
    
    <input
    className="text-black"
    type="email"
    id="email"
    value={user.email}
    onChange={(e)=>setUser({...user,email:e.target.value})}
    />
    </label>
    <label htmlFor="password" className="my-4">password
    
    <input
    className="text-black"
    type="password"
    id="password"
    value={user.password}
    onChange={(e)=>setUser({...user,password:e.target.value})}
    />
    </label>

    <button className="border" onClick={onsignUp}>{buttonDisable? "no signup":"signup"}</button>
    <Link href='/login'>goto login</Link>

    </div>
  )
}

export default page