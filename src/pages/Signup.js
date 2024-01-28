import React from 'react'
import "../css/Login.css";
import { Link } from 'react-router-dom'

function Signup() {
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
                <form action="/action_page.php" style={{margin:'45px 0px'}}>
                  <div className="coll">
                      
                      <input type="text" name="username" placeholder="Username" required />
                      <input type="password" name="password" placeholder="Password" required />
                      <input type="password" name="password" placeholder="Password" required />
                      <input type="submit" defaultValue="Login" />
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