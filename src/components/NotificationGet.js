import React from 'react'
import { messaging } from '../Config';
import { getMessaging,getToken,onMessage } from "firebase/messaging";

function NotificationGet() {

    console.log("Requesting user permission");
    if(Notification.permission === "denied"){

      Notification.requestPermission().then((permission)=>{
        if (permission === "granted"){
          console.log("Permission Granted By You");
          
            getToken(messaging, {vapidKey: "BPt3jM_tdom6Eqa1D51PzJVYMWeQxMdn0kD8vp1aatXFPhcphTs5joQDinnGUWgQ9r5pQXKMiu49QhyBq7coX-w"}).then((currentToken)=>{
              if(currentToken){console.log("CurrentToken",currentToken)}})
              .catch((err)=>console.log("Failed to generate the app registration token",err))
          
        }else if(permission === "denied"){
            console.log("Permission Denied By You");
        }
      })

    }else{

      
        getToken(messaging, {vapidKey: "BPt3jM_tdom6Eqa1D51PzJVYMWeQxMdn0kD8vp1aatXFPhcphTs5joQDinnGUWgQ9r5pQXKMiu49QhyBq7coX-w"}).then((currentToken)=>{
          if(currentToken){console.log("Current_Token",currentToken)}})
          .catch((err)=>console.log("Failed to generate the app registration token",err))
      

    }
  

  return (
    <>
    </>
  )
}

export default NotificationGet
