import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignInPage=({setUser})=>{
const navigate=useNavigate();
     useEffect( ()=>{
        if(localStorage.getItem("user")){
        navigate("/profile")}},[])
            



    const [ userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    


    function handleSubmit(e){
        e.preventDefault();
        if(!userName && !password){
            navigate("/")
            return;
        }
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        username:userName,
        password:password,
         })
      })
.then(res => res.json())
.then(data=>{setUser(data)
localStorage.setItem("user",JSON.stringify(data));
navigate("/profile");
}
)
.catch(err => console.log(err))
    }




    return(
        <div className="container">
        <div className="form">
            <p className="welcome-msg">Welcome back &#128075;</p>
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username"> Your Username</label>
                    <input type="text" id="username" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">CONTINUE</button>
                <p className="p-center"><a href="">Forget your password ?</a></p>
            </form>
        </div>
        <p className="p-center signup">Don't have an account? <a href="">Sign up</a></p>
        </div>
    )
}
export default SignInPage;