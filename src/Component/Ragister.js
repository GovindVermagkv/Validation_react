import React from "react";
import "../App.css"
import Login from "./Login";
import {Link} from "react-router-dom"

export default function Ragister(){
    
    return(
        <>
            <div id="ragister">
                <input type={"text"} placeholder="Full Name" id="Name"/>
                <input type={"number"} placeholder="Mobile number"/>
                <input type={"email"} placeholder="Email" id="email"/>
                <input type={"password"} placeholder="Password" id="password"/>
             <input type={"submit"} id="submit" value="submit"  onClick={Store}/>
            </div>
        </>
    )
    function Store(){
        const validmail=document.getElementById("email").value
        const validpassword=document.getElementById("password").value;
        const validName=document.getElementById("Name").value;
        const ragister=document.getElementById("ragister")

        ragister.style.display="none"
       

        localStorage.setItem("storemail",validmail)
        localStorage.setItem("storepass",validpassword)
        localStorage.setItem("storeName",validName)
    }
}