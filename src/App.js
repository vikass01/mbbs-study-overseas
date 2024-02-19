import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Connect from "./pages/Connect";
import BlogPost from "./components/BlogPost";
import Company from "./pages/Company";
import Splash from "./pages/Splash"


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import ScrollToTop from "./pages/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import MemberDashboard from "./pages/MemberDashboard";
import Profile from "./pages/Profile";
import { useState,createContext, useEffect} from "react";
import Universities from "./pages/Universities";
import UniversityHeader from "./components/UniversityHeader";
import GetUniversityDetail from "./pages/GetUniversityDetail";
import LoggedUserMenu from "./components/LoggedUserMenu";
import { getToken } from "firebase/messaging";
import { messaging } from "./Config";

export const Context = createContext();



const App = ()=> {
 
  
  const defaultUser = {
    operationType:"signOut",
    user:{     
      displayName:"Mr. abc Kumar",
      email:'testabc@gmail.com',
      photoURL:"https://static.toiimg.com/thumb/resizemode-4,msid-76729536,width-1200,height-900/76729536.jpg"
  
    }   

  }
//  const funChange = ()=>{

//  }
  const [userData,setuserData] = useState(defaultUser)  
    
    if (userData) {
      // console.log('data received in App.js',userData);
      
    } else {
      console.log("something bad in app and data not received from login page ");
    }
  

  const LoginData =(data)=>{
    setuserData(data)
  }

  const NotificationPermission =async()=>{
    
    if (Notification.permission === "denied"){
      console.log("Notification.permission",Notification.permission);
      const permission = await Notification.requestPermission()
      console.log("permission",permission);
        if (permission === "granted"){
        const token = await getToken(messaging, {vapidKey: "BPt3jM_tdom6Eqa1D51PzJVYMWeQxMdn0kD8vp1aatXFPhcphTs5joQDinnGUWgQ9r5pQXKMiu49QhyBq7coX-w"});
        console.log("token",token);
        }else{
          alert("Notification Alert Disabled")
        }



    }else if(Notification.permission === "granted"){
      getToken(messaging, {vapidKey: "BPt3jM_tdom6Eqa1D51PzJVYMWeQxMdn0kD8vp1aatXFPhcphTs5joQDinnGUWgQ9r5pQXKMiu49QhyBq7coX-w"}).then((CurrentToken)=>
      console.log("CurrentToken",CurrentToken))
    }
  }

  useEffect(()=>{
    NotificationPermission()
  },[])





 

  
  
  return (
    <>
    <Context.Provider value={{ authUser: userData ,getLoginData:LoginData }}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Company />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/post" element={<BlogPost />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/home" element={<MemberDashboard />} />          
          <Route path="/profile" element={<Profile />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universityheader" element={<UniversityHeader />} />
          <Route path="/getdetail/:id" element={<GetUniversityDetail />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/test" element={<LoggedUserMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      </Context.Provider>
    </>
  );
}

export default App;
