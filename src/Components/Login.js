import React, {useState} from "react";
import useLocalStorage from "use-local-storage";
import { useNavigate } from 'react-router-dom'
import './Login.css'



export default function Login(props){
    
    const history = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: ""}); 

    props.funcNavi(false)
   

    function checkMe(checkbox){
     if(checkbox){
        document.getElementById("submit").removeAttribute("disabled");
     }else{
        document.getElementById("submit").setAttribute("disabled", "disabled");
     }
    }
    
    return(
       <main className="team">
        <div className="signUp" >
        <div className='login'>
          <div className='container'>
            <form>
              <label>E-mail</label>
              <input 
              type='email' 
              placeholder='Enter your email'
              value={credentials.email}
              onChange={event => setCredentials({email: event.target.value, password: credentials.password})}
              required
              />
              <label>Password</label>
              <input 
              type='password' 
              placeholder='Enter your password' 
              value={credentials.password}
              onChange={event => setCredentials({email: credentials.email, password: event.target.value})}
              required
              />
              <div className='remember'>
                <input 
                type='checkbox' 
                onChange={checkMe}
                />
                <p>Remember Me</p>
             {/* Use history is remembering no matter what BUT can be changed later */}
              </div>
              <button
               disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(credentials.email)) }
               onClick={(e)=>{
                 e.preventDefault();
                 if (credentials.password === "")
                   history.push("/snacks");
                   history('/snacks')
                   props.funcNavi(true)
                 //Needed to make Nav appear after push
                 setCredentials({
                    email: "", password: ""
                 })

               }}
              >Log In</button>
            </form>
            <div className='bottom'>
              <p>Forget your password?</p>
              <a href='/'>Reset Password</a>
            </div>
            <p className='create'>Create Account</p>
          </div>
        </div>
      </div>
      </main>
    )
}




















