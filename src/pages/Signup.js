import React, { useState } from 'react'
import "../css/Login.css";
import { Link } from 'react-router-dom'
import  app from '../Config';
import {  getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setrePassword] = useState("")



  
  

  const RegisterUser = async() => {
    const auth = getAuth(app);
    if(password === repassword){
      await createUserWithEmailAndPassword(auth, email, password).then((result)=>{
        console.log("account create response",result)
        navigate('/home')    
      
      }).catch((error)=>{
        alert("Account Already Exists with this email id ,Error : ", error)
      })
    }else{
      alert("Password not matching")
    }
    

  }



  return (
    <div className="vvbb">
      <div className='ftfh'>
          <img style={{borderRadius:40}} alt='study locations' src='https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/02165322/MBBS-Abroad-Consultants.jpg'/>
     </div>
          {/* 000000000000000000000000000000000000000000000000000000000000 */}
        <div className="zxzx" >
            <div className="md-lg">
                <p style={{textAlign:'center', }}>Signup with Username and Password</p>
            </div>
                <form style={{margin:'45px 0px'}}>
                    <div className="coll">
                      <input value={email} type="text" name="username" placeholder="Username" required onChange={(e)=>setemail(e.target.value)} />
                      <input value={password} type="password" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
                      <input value={repassword} type="password" name="password" placeholder="Password" required onChange={(e)=>setrePassword(e.target.value)} />
                      <input type='button' onClick={RegisterUser} value='Create' style={{backgroundColor:"#70467E", color:"#fff", cursor:'pointer'}} />
                    </div>
                </form>
                  <div style={{ marginTop:20}} >
                    <div style={{display:"flex", flexDirection:'column', gap:10 }}>
                      <Link to="/login" style={{color: 'black'}} >Login</Link>
                      <Link to="/ForgotPassword" style={{color: 'black'}} >Forgot password?</Link>
                    </div>
                  </div>
        </div>
            
        
      </div>
  )
}



export default Signup