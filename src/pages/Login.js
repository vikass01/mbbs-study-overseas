import React, { useState, useContext } from 'react'
import "../css/Login.css";
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import app from '../Config';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import Splash from './Splash';

function Login() {
  const {getLoginData} = useContext(Context)
  
  
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoader, setShowLoader] = useState(false);

  const LoginUser =()=>{
    setShowLoader(true)
    const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {          
          getLoginData(result)
          // console.log('Current User Data Sent ......',result.operationType);
          navigate("/home")
          setShowLoader(false)
      })
      .catch((error) => {
          
          console.log("Login Failed",error)
          alert("login Failed, Invalid Inputs")
          setShowLoader(false)
      });
     
  
  }


  const loginGoogle =()=>{
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result);
    getLoginData(result)
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
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(result);
    getLoginData(result)
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
      {showLoader && <Splash/>}
            <div className='ftfh'>
              <img style={{borderRadius:40}} alt='study locations' src='https://cdn.imgbin.com/18/21/21/imgbin-nursing-college-health-care-student-nurse-doctors-and-nurses-BQq59yVgNGPg4gwPuLpM5PQ72.jpg'/>
            </div>
          <div className="zxzx" >  
            <div className="md-lg">
                <p style={{textAlign:'center', }}>Login with Username and Password</p>
            </div>
        {/* <div className="vvbb isolate mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl"> */}
          <form >
            
                <div className="coll">                  
                  <input value={email} type="text" name="username" placeholder="Email id" required onChange={(e)=>setEmail(e.target.value)} style={{borderWidth:"2px",borderColor:"black"}} />
                  <input value={password} type="password" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
                  <input type="button" defaultValue="Login" onClick={LoginUser} style={{backgroundColor:"#70467E", color:"#fff", cursor:'pointer'}} />
                </div>
              <h2 style={{textAlign: 'center'}}>Login with Social Media or Manually</h2>
                 
                  <div className="coll">
                    <Link className="fb btn lgbtn ggg" onClick={loginFacebook}>
                      <i className="fa fa-facebook fa-fw" /> Login with Facebook
                    </Link>                    
                    <Link className="google btn lgbtn" onClick={loginGoogle}>
                      <i className="fa fa-google fa-fw" /> Login with Google+
                    </Link>
                  </div>
              
            
            
          </form>
            <div style={{ marginTop:20}} >
              <div style={{display:"flex", flexDirection:'column', gap:10 }}>
                <Link to="/signup" style={{color: 'black'}} >Sign up</Link>
                <Link to="/ForgotPassword" style={{color: 'black'}} >Forgot password ?</Link>
              </div>
            </div>
           
        {/* </div> */}
            
      </div>  
      </div>
     
  )
}



export default Login