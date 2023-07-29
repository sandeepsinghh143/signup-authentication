import React, { useState } from "react";
import SignInPage from "./components/signInPage";
import Profile from "./components/profile";
import { Routes, Route} from "react-router-dom";



const App=()=>{
  const[user, setUser]=useState("");
  return (
      <div>
        <Routes>
          <Route path="/" element={<SignInPage setUser={setUser}/>}></Route>
          <Route path="/profile" element={ <Profile user={user}/>}></Route>
        </Routes>
        
       
      </div>

  )
}

export default App;