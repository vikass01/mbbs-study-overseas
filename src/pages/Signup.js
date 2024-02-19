import React, { useState,useContext } from 'react'
import "../css/Login.css";
import { Link } from 'react-router-dom'
import  app from '../Config';
import {  getAuth, createUserWithEmailAndPassword,sendEmailVerification} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Splash from './Splash';
import { Context } from '../App';



function Signup() {
  const {getLoginData} = useContext(Context)
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setrePassword] = useState("")
  const [showLoader, setShowLoader] = useState(false);



  
  

  const RegisterUser = async() => {
    setShowLoader(true)
    const auth = getAuth(app);
    if(password === repassword){
      await createUserWithEmailAndPassword(auth, email, password).then((result)=>{
        console.log("account create response",result)
        getLoginData(result)
          console.log("result",result);
        sendEmailVerification(result.user.auth.currentUser)
        .then((resp) => {
          alert("email sent ", resp);
        });

        navigate('/home') 
        setShowLoader(false)   
      
      }).catch((error)=>{
        alert("Account Already Exists with this email id ,Error : ", error)
        setShowLoader(false)
      })
    }else{
      alert("Password not matching")
      setShowLoader(false)
    }
    

  }



  return (
    <div className="vvbb">
      {showLoader && <Splash/>}
      <div className='ftfh'>
          <img style={{borderRadius:40}} alt='study locations' src='https://cdn.imgbin.com/18/21/21/imgbin-nursing-college-health-care-student-nurse-doctors-and-nurses-BQq59yVgNGPg4gwPuLpM5PQ72.jpg'/>
     </div>
          {/* 000000000000000000000000000000000000000000000000000000000000 */}
        <div className="zxzx" >
            <div className="md-lg">
                <p style={{textAlign:'center', }}>Signup with Username and Password</p>
            </div>
                <form style={{margin:'45px 0px'}}>
                    <div className="coll">
                      <input value={email} type="text" name="username" placeholder="Email id" required onChange={(e)=>setemail(e.target.value)} />
                      <input value={password} type="password" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
                      <input value={repassword} type="password" name="password" placeholder="Password" required onChange={(e)=>setrePassword(e.target.value)} />
                      <input type='button' onClick={RegisterUser} value='Create' style={{backgroundColor:"#70467E", color:"#fff", cursor:'pointer'}} />
                    </div>
                </form>
                  <div style={{ marginTop:20}} >
                    <div style={{display:"flex", flexDirection:'column', gap:10 }}>
                      <Link to="/login" style={{color: 'black'}} >Already have a account ?</Link>
                      <Link to="/ForgotPassword" style={{color: 'black'}} >Forgot password ?</Link>
                    </div>
                  </div>
        </div>
            
        
      </div>
  )
}



export default Signup