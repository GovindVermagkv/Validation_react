import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

export default function Ragister(){
    
    return(
        <>
       
            <div id="ragister">
            <h1>Ragister Page</h1>
                <input type={"text"} placeholder="Full Name" id="Name" required />
                <input type={"number"} placeholder="Mobile number"/>
                <input type={"email"} placeholder="Email" id="email" required />
                <input type={"password"} placeholder="Password" id="password" required />
                <input type={"file"} placeholder="Password" id="file" required />
                <input type={"date"} placeholder="Password" id="date" required />
            <Link to="login" id="submit" onClick={Store}>submit</Link>
            <Link to="login" id="login2">Login</Link>
            </div>
        </>
    )
    function Store(){
        const validmail=document.getElementById("email").value
        // validmail.value=""
        const validpassword=document.getElementById("password").value;
        const validName=document.getElementById("Name").value;
        const validfile=document.getElementById("file").value;
        const validdate=document.getElementById("date").value;
        // const ragister=document.getElementById("ragister")

        // ragister.style.display="none"
       

        localStorage.setItem("storemail",validmail)
        localStorage.setItem("storepass",validpassword)
        localStorage.setItem("storeName",validName)
        localStorage.setItem("storefile",validfile)
        localStorage.setItem("storedate",validdate)
    }
}