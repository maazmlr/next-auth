"use client"
import Link from 'next/link';
import React from 'react'

const page = () => {

  const [user,setUser]=React.useState({
    email:'',
    password:'',
  });

  const onlogin=async()=>{

  }

  return ( 
    <div className="flex flex-col items-center justif-center min-h-screen py-2"> 
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

    <button className="border" onClick={onlogin}>login</button>
    <Link href='/signup'>goto signup</Link>

    
    
    </div>
  )
}

export default page