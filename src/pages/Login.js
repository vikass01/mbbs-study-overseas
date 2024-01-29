import React, { useState } from 'react'
import "../css/Login.css";
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from '../Config';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { Link } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const LoginUser =()=>{
    const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
          console.log('Login Successfully');
          navigate("/home")
      })
      .catch((error) => {
          
          console.log("Login Failed",error)
      });
     
  
  }


  const loginGoogle =()=>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result);
    navigate('/home')
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    // ...
  });
  }

  // const loginTwitter =()=>{
  //   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(googleAuthProvider)
  // }

  const loginFacebook=()=>{
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result);
    navigate('/home')
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.log(error);
    // ...
  });
  }
  return (
    
    <div className="vvbb">      
          
        {/* <div className="vvbb isolate mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl"> */}
          <form >
            <div className="row">
            <div className="col">
                <div className="hide-md-lg">
                  <p>Login with Username and Password</p>
                </div>
                <input value={email} type="text" name="username" placeholder="Username" required onChange={(e)=>setEmail(e.target.value)} />
                <input value={password} type="password" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
                <input type="button" defaultValue="Login" onClick={LoginUser} style={{backgroundColor:"#70467E", color:"#fff", cursor:'pointer'}} />
              </div>
              <h2 style={{textAlign: 'center'}}>Login with Social Media or Manually</h2>
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col">
                <Link className="fb btn lgbtn ggg" onClick={loginFacebook}>
                  <i className="fa fa-facebook fa-fw" /> Login with Facebook
                </Link>
                <Link to="/" className="twitter btn lgbtn ggg">
                  <i className="fa fa-twitter fa-fw" /> Login with Twitter
                </Link>
                <Link className="google btn lgbtn" onClick={loginGoogle}>
                  <i className="fa fa-google fa-fw" /> Login with Google+
                </Link>
              </div>
              
            </div>
            
          </form>
            <div style={{paddingLeft:48, marginTop:20}} >
              <div style={{display:"flex", flexDirection:'column', gap:10 }}>
                <Link to="/signup" style={{color: 'black'}} >Sign up</Link>
                <Link to="/ForgotPassword" style={{color: 'black'}} >Forgot password?</Link>
              </div>
            </div>
           
        {/* </div> */}
            
        
      </div>
     
  )
}



export default Login