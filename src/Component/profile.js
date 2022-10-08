import { React } from "react"

const Profile = () => {
    const files = localStorage.getItem("storefile")
    const Name = localStorage.getItem("storeName")
    const date = localStorage.getItem("storedate")
    const email = localStorage.getItem("storemail")
    const password = localStorage.getItem("storepass")
    return (
        <>
            <div>
            <h1>this is profile page</h1>
            <img src="files" alt="" />
        <h1>your name :- {Name}</h1>
        <h1>your DOB :- {date}</h1>
        <h1>your Email :- {email}</h1>
        <h1>your Password :- {password}</h1>
            </div>
        </>
    )
}
export default Profile;