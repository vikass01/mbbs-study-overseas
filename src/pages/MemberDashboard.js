import React, { useEffect, useState,useContext, } from 'react'
import app from '../Config';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import "../css/MemberDashboard.css"
import { Link } from 'react-router-dom';
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { Context } from '../App';
// import EmailVerification from './EmailVerification';
import ErrorPages from './ErrorPages';
import Splash from './Splash';
import { getFirestore } from "firebase/firestore"
import { collection, addDoc,doc, setDoc } from "firebase/firestore"; 








const MemberDashboard=()=> {
  const db = getFirestore(app);
  const {authUser} = useContext(Context);
  console.log("data received in home.js", authUser);
  var navigate = useNavigate()
  const auth = getAuth(app);
  console.log('direct auth data',auth);
  const storage = getStorage(app)

  const [usernamee, setusernamee] = useState("Your Name Here")
  const [title, setTitle] = useState("Your Title Here")
  const [mobile,setmobile] = useState("(239) 816-9029")
  const [address,setaddress] = useState("Bay Area, San Francisco, CA")
  const [statee,setstatee] = useState("Maharashtra")
  const [pincode,setpincode] = useState("456789")
  const [newprofile, setnewprofile] = useState("https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg")
  const [editprofile,seteditprofile] = useState(true)
  const [showLoader, setShowLoader] = useState(false);

  const writeUserData =async()=>{
    
    try {
      const docRef = await setDoc(doc(db, "users", authUser.user.email), {
        username: usernamee,
        title: title,
        address: address,
        state:statee,
        pincode:pincode
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  
  
  
  

  
 
  useEffect(() => {  
    window.addEventListener("beforeunload", alertUser)
    // return () => {
    //   window.removeEventListener("beforeunload", alertUser);
    // };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "are you sure ?";
  };
  
  const userLogout =async()=>{
    const auth = await getAuth(app);
    await signOut(auth).then(() => {
      // Sign-out successful.
          console.log("Signed out successfully")
          navigate('/login')
      }).catch((error) => {
      // An error happened.
      console.log(error);
      });
  }

  
    

  const saveProfilePhoto =async(e)=>{
    setShowLoader(true)
      console.log(usernamee,mobile,address,statee,pincode);
      const storeLocation = ref(storage, `profileImages/${authUser.user.uid}.png`)
      await uploadBytes(storeLocation, newprofile).then(() => {
      });
      await getDownloadURL(storeLocation).then(async(url) => {
      await updateProfile(auth.currentUser, {
        photoURL: url
      }).then((resp)=>{console.log("upload url response",resp)})
      })
      await seteditprofile(true)
      setShowLoader(false)
      
    
  }

  if(authUser.user.emailVerified === false){
    return <ErrorPages Error={"This means your email verfication process is not complete yet. You'll need to head over to your email to activate and complete the signup process to verify the ownership of the account."}/>
  
  }else if(authUser?.user?.emailVerified === undefined){
    return <ErrorPages Error={"You refreshed incorrectly or logged out from website, login agian to use again."} />
    
  }else if(authUser.operationType === "signOut") {
    return <ErrorPages Error={"You refreshed incorrectly or logged out from website, login agian to use again."} />
           
  }
  
  return (
    <div className="container expad" >
      {showLoader && <Splash/>}
        <div className="main-body">
          {/* Breadcrumb */}
          {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav> */}
          {/* /Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center" >
                    {/* <img src={authUser.auth.currentUser.photoURL||"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width={150} /> */}
                    <img src={authUser.user.photoURL ||"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle adminPhoto" style={{width:150,height:"auto", boxShadow:"5px 5px 10px 10px"}} />
                    {/* <div style={{position:'absolute'}}>
                      <img alt='bbb' src={photo} style={{height:100,width:100}}/>
                    <input type='file' placeholder='Upload Picture' onChange={upladPicture} />
                    </div> */}
                    <div className="mt-3">
                      {/* <p>{authUser.auth.currentUser.displayName||"abc kumar"}</p> */}
                      <p>{authUser.user.displayName|| "Your Name"}</p>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      {/* <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                      
                      <button className="btn btn-primary" style={{marginRight:5}} onClick={()=>seteditprofile(false)} >Edit</button>
                      <button className="btn btn-outline-primary" onClick={userLogout}>Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3" >
                <ul className="list-group list-group-flush" >
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    {/* <h6 className="mb-0">Website</h6>
                    <span className="text-secondary">https://bootdey.com</span> */}
                    <Link style={{width:"100%"}} className="btn">Profile</Link>
                    
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    {/* <h6 className="mb-0">Github</h6>
                    <span className="text-secondary">bootdey</span> */}
                    <Link style={{width:"100%"}} className="btn ">Profile</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    {/* <h6 className="mb-0">Twitter</h6>
                    <span className="text-secondary">@bootdey</span> */}
                    <Link style={{width:"100%"}} className="btn">Profile</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    {/* <h6 className="mb-0">Instagram</h6>
                    <span className="text-secondary">bootdey</span> */}
                    <Link style={{width:"100%"}} className="btn">Profile</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    {/* <h6 className="mb-0">Facebook</h6>
                    <span className="text-secondary">bootdey</span> */}
                    <Link style={{width:"100%"}} className="btn">Profile</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* 000000000000000000000000000000000000000000000000000000000 */}
           
            <div className="col-md-8" >
            {editprofile ?
              <div className="card mb-3" >
               
                <div className="card-body" >
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              {/* {authUser.auth.currentUser.displayName||"abc kumar"} */}
                              {authUser?.user?.displayName|| "Your Name"}
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {/* {authUser.auth.currentUser.email||"abc@demo.com"} */}
                            {authUser.user.email}
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Phone</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              (239) 816-9029
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Mobile</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              (320) 380-4539
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              Bay Area, San Francisco, CA
                          </div>
                      </div>
                      {/* <hr /> */}
                      {/* <div className="row" style={{marginTop:5}}>
                          <div className="col-sm-12" onClick={()=>seteditprofile(false)}>
                              <Link className="btn btn-info "  >Edit</Link>
                          </div>
                      </div> */}
                      </div>
                </div>:


              
              
              
              <div className="col-lg-8 editProfile" style={{width:"100%"}} >
                    <div className="card">
                        <div className="card-body">
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" placeholder={authUser.user.displayName || usernamee} onChange={(event)=>setusernamee(event.target.value)} />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                    <h6 className="mb-0">Title</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" placeholder={authUser?.user?.title || title} onChange={(event)=>setTitle(event.target.value)} />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Email</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" placeholder= {authUser.user.email || "Your Email here"} disabled/>
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Mobile</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" placeholder={mobile} onChange={(event)=>setmobile(event.target.value)} />
                                  </div>
                              </div>
                              {/* <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Mobile</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" defaultValue="(320) 380-4539" />
                                  </div>
                              </div> */}
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Address</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" placeholder={address} onChange={(event)=>setaddress(event.target.value)}/>
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0"> </h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary" style={{display:'flex',gap:2}}>
                                      <input type="text" className="form-control" placeholder={statee} onChange={(event)=>setstatee(event.target.value)}/>
                                      <input type="text" className="form-control" placeholder={pincode} onChange={(event)=>setpincode(event.target.value)}/>
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Profile Picture</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary" aria-placeholder=''>
                                      <input type="file" accept="image/*" className="form-control" onChange={(event)=>setnewprofile(event.target.files[0])} />
                                      <Link onClick={saveProfilePhoto} > Upload Profile Picture </Link>
                                  </div>
                              </div>
                                  
                                <div className="text-secondary" style={{display:'flex', flexDirection:'row-reverse', width:'100%', gap:30, marginTop:50}}>                                          
                                    <Link className="btn btn-primary" onClick={writeUserData}  > Save Data  </Link>
                                    <Link className="btn btn-outline-primary"  onClick={()=>seteditprofile(true)} > Back  </Link>                                      
                                </div>
                                                                            
                            </div>
                              
                        </div> 
                        
                           
                    </div>}

                    
              
              {/* 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}
              <div className="row gutters-sm" style={{marginTop:20}}>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><span style={{fontWeight:600}} className="material-icons text-info mr-2">Admission</span>Application Status</h6>
                      <small>ALTAI STATE MEDICAL UNIVERSITY</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '80%',backgroundColor:"#70467E"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>FIRST MOSCOW STATE MEDICAL UNIVERSITY</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '72%',backgroundColor:"#70467E"}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>FIRST MOSCOW STATE MEDICAL UNIVERSITY</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '89%',backgroundColor:"#70467E"}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>GOMEL STATE MEDICAL UNIVERSITY</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '55%',backgroundColor:"#70467E"}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>TASHKENT MEDICAL ACADEMY</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '66%',backgroundColor:"#70467E"}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><span style={{fontWeight:600}} className="material-icons text-info mr-2">Admission</span>Status by Universities</h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '80%',backgroundColor:"#70467E"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '72%',backgroundColor:"#70467E"}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '89%',backgroundColor:"#70467E"}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '55%',backgroundColor:"#70467E"}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '66%',backgroundColor:"#70467E"}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              </div>   
            </div>
          </div>
        </div>
        
      
  )
}

export default MemberDashboard
