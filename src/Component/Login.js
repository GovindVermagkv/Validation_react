import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

export default function Login(){
    return(
        <>
        <div id="login">
        <h1>Login Page</h1>
        <input type={"text"} placeholder="Email" id="loginemail"/>
        <input type={"password"} placeholder="Password" id="loginpassword"/>
        <Link id="login2" onClick={ValidLogin} t>Submit</Link>
        <Link id="submit" to="/">Ragister ?</Link>
        <h1 id="mname"></h1>
        </div>
        </>
       
    )
    function ValidLogin(){
        const loginemail=document.getElementById("loginemail").value
        const loginpassword=document.getElementById("loginpassword").value
        const getmail=localStorage.getItem("storemail")
        const getpass=localStorage.getItem("storepass")
        {loginemail===getmail && loginpassword===getpass ? Greeting(): alert("login failed")}
    }


    function Greeting(){
        const Loginname=localStorage.getItem("storeName")
        const mname=document.getElementById("mname")
       
        return(
          mname.innerText=`Welcome  ` +  Loginname
        )
    }
}