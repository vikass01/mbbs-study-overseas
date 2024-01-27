import React from 'react'
import "../css/Login.css";
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="vvbb">
        {/* <div className="vvbb isolate mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl"> */}
          <form action="/action_page.php">
            <div className="row">
            <div className="col">
                <div className="hide-md-lg">
                  <p>Login with Username and Password</p>
                </div>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" defaultValue="Login" />
              </div>
              <h2 style={{textAlign: 'center'}}>Login with Social Media or Manually</h2>
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col">
                <Link to="/" className="fb btn lgbtn ggg">
                  <i className="fa fa-facebook fa-fw" /> Login with Facebook
                </Link>
                <Link to="/" className="twitter btn lgbtn ggg">
                  <i className="fa fa-twitter fa-fw" /> Login with Twitter
                </Link>
                <Link to="/" className="google btn lgbtn">
                  <i className="fa fa-google fa-fw" /> Login with Google+
                </Link>
              </div>
              
            </div>
            
          </form>
            <div style={{paddingLeft:48, marginTop:20}} >
              <div style={{display:"flex", flexDirection:'column', gap:10 }}>
                <Link to="/signup" style={{color: 'black'}} >Sign up</Link>
                <Link to="/forgot" style={{color: 'black'}} >Forgot password?</Link>
              </div>
            </div>
           
        {/* </div> */}
            
        
      </div>
  )
}



export default Login