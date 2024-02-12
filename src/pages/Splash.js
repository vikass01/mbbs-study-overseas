import React from 'react'
import "../css/Splash.css"

export default function Splash() {

  return (
    <div style={{height:'100vh', width:'100vw',position:"absolute", zIndex:10, backgroundColor:"rgba(0,0,0,0.5)", display:'flex', justifyContent:'center', flexDirection:"column", alignItems:'center'}}>
      <div className='loader' >
      <img alt='logo' src={require('../assets/esPEvsXVNsJczM8CSSPfprsfRlNRwzhLGs4vCdHs.gif')} />
      </div>
      <div style={{width:"20%", marginTop:20}}>
        <p style={{color:"#fff", textAlign:"center"}}>Please Wait...</p>
      </div>
      
      </div>
  )
}



// export default Splash
