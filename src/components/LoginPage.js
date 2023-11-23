import {React, useState} from "react";
import MyTextField from "./MyTextField";

function LoginPage({setAuthenticated}){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const user = e.target[0].value;
    const pass = e.target[1].value;
    
    //check db if true
    setAuthenticated(true)
  }

  return(
    <>
    <h1>
      Login Page
    </h1>
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <label for="username">{"Username: "}</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label for="password">{"Password: "}</label>
        <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
      
    </div>
    </>
  )
}

export default LoginPage;