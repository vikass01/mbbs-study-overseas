import React from 'react'
import "../css/Login.css";
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="vvbbb">
        {/* <div className="zxzx"> */}
          <form action="/action_page.php">
            <div className="coll">
                <div className="hide-md-lg">
                  <p>Signup with Username and Password</p>
                </div>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" defaultValue="Login" />
              </div>
          </form>
            <div style={{ marginTop:20, marginBottom:20, }} >
              <div style={{display:'flex',flexDirection:'start'}}>
                <Link to="/signup" style={{color: 'black',marginRight:30,}} >Login</Link>
                <Link to="/forgot" style={{color: 'black'}} >Forgot password?</Link>
              </div>
            </div>
           
        {/* </div> */}
            
        
      </div>
  )
}



export default Signup