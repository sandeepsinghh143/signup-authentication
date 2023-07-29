import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Profile=()=>{
    let [profile,setProfile]=useState("");
    let navigate=useNavigate();
    function logout(){
        localStorage.clear();
        navigate("/");
    }
      const details=JSON.parse(localStorage.getItem("user"))||"";
        useEffect(()=>{
            if(!details){
                localStorage.clear();
                navigate("/");
               }else{
            fetchData()
        }},[])

    function fetchData(){
            fetch(`https://dummyjson.com/users/${details.id}`)
            .then(res=>res.json())
            .then(data=>{localStorage.setItem("id",details.id)
                setProfile(data)})
            .catch(err=>console.log(err))
    }

    return(
        <div className="profile">
            <div><img src={details.image} alt="user-image"/></div>
            <p className="name-p">{details.firstName+" "+details.lastName}</p>
            <p><span>User Name : </span>{details.username}</p>
            <p><span>First Name : </span>{details.firstName}</p>
            <p><span>Last Name : </span>{details.lastName}</p>
            <p><span>User Id : </span>{details.id}</p>
            <p><span>Email : </span>{details.email}</p>
            <p><span>Gender : </span>{details.gender}</p>
            <p className="token"><span>Token : </span>{details.token}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Profile;