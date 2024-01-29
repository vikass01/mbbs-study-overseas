import React, { useState } from 'react'
import "../css/Login.css";
import { Link } from 'react-router-dom'
import  app from '../Config';
import {  getAuth, createUserWithEmailAndPassword  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
 

  const RegisterUser = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password).then((result)=>{
      console.log(result)
    navigate('/home')
    
    })
    
    

          
 
  }



  return (
    <div className="vvbbb">
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
                      <input  type="password" name="password" placeholder="Password" required  disabled />
                      <input type='button' onClick={RegisterUser} value='Create' style={{backgroundColor:"#70467E", color:"#fff", cursor:'pointer'}} />
                    </div>
                </form>
                  <div style={{ marginTop:20, marginBottom:20, }} >
                    <div className='mkoi' style={{display:'flex',flexDirection:'start'}}>
                      <Link to="/login" style={{color: 'black',marginRight:30,}} >Login</Link>
                      <Link to="/ForgotPassword" style={{color: 'black'}} >Forgot password?</Link>
                    </div>
                  </div>
        </div>
            
        
      </div>
  )
}



export default Signup