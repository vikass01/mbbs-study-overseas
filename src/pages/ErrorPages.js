import React from 'react'
import '../css/EmailVerification.css'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import app from '../Config';




function ErrorPages(props) {
  const navigate = useNavigate()
  const auth = getAuth(app);


  const fine =()=>{
    signOut(auth).then(() => {
      console.log("Logged Out");
    }).catch((error) => {
      // An error happened.
    });
    navigate("/login")
  }

  



  return (
    <div className='cont'>
    
        <div className="cookiesContent" id="cookiesPopup">
            {/* <button className="close">✖</button> */}
            <img className='nji' src="https://cdn-icons-png.flaticon.com/512/8317/8317477.png" alt="cookies-img" />
            <p className='bgt'>Hi Dear User</p>
            <p>{props.Error}</p>
            <button onClick={fine} className="accept">That's fine!</button>
        </div>
    
    </div>
  )
}

export default ErrorPages
