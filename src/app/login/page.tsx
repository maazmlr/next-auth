'use client'

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import toast from "react-hot-toast"

const page = () => {
  const router =useRouter();
  const [user,setUser]=React.useState({

    email:'',
    password:'',
  });
  const [disable,setDisable]=useState(false);
  const [loading ,setloading ]=useState(false);

  const onlogin=async()=>{
    try {
      setloading(true);
     const response= await axios.post('api/users/login',user);

     console.log('login suscessful',response.data);
     toast.success('login succesful ');
     router.push('/profile')
      
    } catch (error :any) {

      console.log('error login ',error.message);
      toast.error(error.message);

      
    }
    finally{
      setloading(false)
    }

  }
  useEffect(()=>{
      if(user.email.length>0 && user.password.length>0){
        setDisable(false);
      }
      else{
        setDisable(true)
      }
  
  },[user])

  return ( 
    <div className="flex flex-col items-center justif-center min-h-screen py-2">

      <h1>{loading ? 'processing ' :'loading'}</h1> 
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

    <button className="border" onClick={onlogin}>{disable ? 'oops' :'signup'}</button>
    <Link href='/signup'>goto signup</Link>

    
    
    </div>
  )
}

export default page