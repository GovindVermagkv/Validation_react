// import React from "react";
import {Outlet} from "react-router-dom"
import "../App.css"

const Layout=()=>{
    return(
        <>
            <div id="layout">
                <h1>welcome to verma validation zone</h1>

                {/* <button><Link>Ragister</Link></button>
                <button><Link>Login</Link></button> */}
                {/* <ul>
                    <li><Link to="/">Ragister</Link></li>
                    <li><Link to="login">Login</Link></li>
                </ul> */}
            </div>
            <Outlet />
        </>
    )
}

export default Layout;
