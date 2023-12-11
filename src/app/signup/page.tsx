'use client'

import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import {axios} from 'axios'
const page = () => {

  const [user,setUser]=React.useState({
    email:'',
    password:'',
    username:""
  });

  const onsignUp=async ()=> {

  }

  return (
    <div className="flex flex-col items-center justif-center min-h-screen py-2">

    <h1>signup</h1>
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

    <button className="border" onClick={onsignUp}>signup</button>
    <Link href='/login'>goto login</Link>

    </div>
  )
}

export default page