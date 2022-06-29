import React from 'react'
import {  signIn, useSession } from "next-auth/react";


const Signin = () => {

    const {session:data}=useSession()
    console.log(data)

    

  return (
    <div className="loginBody">
      <button className="loginBtn" onClick={() => signIn("facebook")}>
        Login
      </button>
    </div>
  )
}

export default Signin