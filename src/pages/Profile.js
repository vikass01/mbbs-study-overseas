import React, { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth";
import app from '../Config';



function Profile() {
    const [data, setdata] = useState(null)

    useEffect(()=>{
        const auth = getAuth(app);
        const user = auth.currentUser;
        if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        setdata(user)
        console.log(user);
        }

    },[])
    

  return (
    <div>
        {/* {data?.displayName}
        {data?.photoURL} */}
        {/* {data?.email} */}
        {data?.emailVerified}
      
    </div>
  )
}

export default Profile
