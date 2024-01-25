import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




export default function Splash() {
const navigate = useNavigate()

setTimeout(() => {
  navigate('/home')
}, 2000);
  

  return (
    <div style={{height:'100vh', width:'100vw',backgroundColor:'#fff', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div style={{height:200,width:200}}>
      <img alt='logo' src={require('../assets/bbrandlogomd.png')} />
      </div>
      </div>
  )
}



// export default Splash
