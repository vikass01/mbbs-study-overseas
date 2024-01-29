import React, { useEffect, useState } from 'react'
import app from '../Config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";




function MemberDashboard() {
  const navigate = useNavigate()
 const [userData,setuserData] = useState(null)

  useEffect(()=>{
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setuserData(user)
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [userData])

  
const userLogout =async()=>{
  const auth = getAuth(app);
  await signOut(auth).then(() => {
    // Sign-out successful.
        console.log("Signed out successfully")
        navigate('/login')
    }).catch((error) => {
    // An error happened.
    console.log(error);
    });
}

  return (
    <div style={{marginTop:100}}>
    <p>memberDashboard</p>
    {
      userData?.uid
    }
    <br/>
    {
      userData?.email
    }
    <button onClick={userLogout}>logout</button>
</div>
  )
}

export default MemberDashboard
