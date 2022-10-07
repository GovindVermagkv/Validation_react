import React from "react";
import "../App.css"

export default function Login(){
    return(
        <>
        <div id="login">
        <input type={"text"} placeholder="Email" id="loginemail"/>
        <input type={"password"} placeholder="Password" id="loginpassword"/>
        <input type={"submit"} value="Login" id="login2" onClick={ValidLogin}/>
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
          mname.innerText=`Welcome ` + Loginname
        )
    }
}