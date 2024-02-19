import React, { useEffect, useState,useContext, } from 'react'
import app, { messaging } from '../Config';
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
import { collection, addDoc,doc, setDoc,onSnapshot } from "firebase/firestore"; 
import LoggedUserMenu from '../components/LoggedUserMenu';
import { getToken } from 'firebase/messaging';








const MemberDashboard=()=> {
  const db = getFirestore(app);
  const {authUser} = useContext(Context);
  console.log("data received in home.js", authUser);
  var navigate = useNavigate()
  const auth = getAuth(app);
  console.log('direct auth data',auth);
  const storage = getStorage(app)

  const [usernamee, setusernamee] = useState(null)
  const [title, setTitle] = useState(null)
  const [mobile,setmobile] = useState(null)
  const [address,setaddress] = useState(null)
  const [statee,setstatee] = useState(null)
  const [pincode,setpincode] = useState(null)
  const [newprofile, setnewprofile] = useState("https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg")
  const [editprofile,seteditprofile] = useState(true)
  const [showLoader, setShowLoader] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState("");
  const [clouduser, setclouduser] = useState(null);
  const [token, settoken] = useState(null);


  const getvapidToken =()=>{
    
      Notification.requestPermission().then((permission)=>{

        console.log("permission",permission);
        if (permission === "granted"){
            getToken(messaging, {vapidKey: "BPt3jM_tdom6Eqa1D51PzJVYMWeQxMdn0kD8vp1aatXFPhcphTs5joQDinnGUWgQ9r5pQXKMiu49QhyBq7coX-w"}).then((currentToken)=>{
              console.log("currentToken",currentToken)
              settoken(currentToken)
            })
            
        }else if (permission === "denied"){
            console.log("permission Denied");
        }


      })
      
      
 
  }

  const writeUserData =async()=>{
    await getvapidToken()
    try {
      const docRef = await setDoc(doc(db, "users", authUser.user.email), {
        username: usernamee,
        title: title,
        address: address,
        state:statee,
        pincode:pincode,
        mobile:mobile,
        fcm_token:token
      });
      console.log("Document written with ID: ", docRef);
      seteditprofile(true)
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    try {
      const docRef = await setDoc(doc(db,"users", "All_FCM"), {token});
      console.log("Document written with ID: ", docRef);
      seteditprofile(true)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

  
  
  
  

  
 
  useEffect(() => {  
    window.addEventListener("beforeunload", alertUser)
    
  }, []);

  useEffect(()=>{
      try {
        const unsub = onSnapshot(doc(db, "users", authUser.user.email), (doc) => {
          console.log("Current data: ", doc.data());
          setclouduser(doc.data())
      });
        
      } catch (error) {
        console.log(error);
      }
  },[])


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
      }).then((resp)=>{
        setUploadSuccess("Profile Photo Saved")

        })
      })
      
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
                      <p>{clouduser?.username || "Your Name Here"}</p>
                      <p className="text-secondary mb-1">{clouduser?.title || "Your Title Here"}</p>
                      {/* <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                      
                      <button className="btn btn-primary" style={{marginRight:5}} onClick={()=>seteditprofile(false)} >Edit</button>
                      <button className="btn btn-outline-primary" onClick={userLogout}>Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3" >
                <ul className="list-group list-group-flush nhnhnh" >
                  <li className="list-group-item d-flex justify-content-center align-items-center flex-wrap gap-2" style={{backgroundColor:"#ccc"}}>
                    {/* <h6 className="mb-0">Website</h6>
                    <span className="text-secondary">https://bootdey.com</span> */}
                    <Link style={{width:200}} className="btn">My Dashboard</Link>
                    <Link style={{width:200}} className="btn ">My Profile</Link>
                    <Link style={{width:200}} className="btn">Apply For Admission</Link>
                    <Link style={{width:200}} className="btn">Withdraw Application</Link>
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
                              {clouduser?.username || "Your Name Here"}
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Title</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              {/* {authUser.auth.currentUser.displayName||"abc kumar"} */}
                              {clouduser?.title || "Your Title Here"}
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
                              <h6 className="mb-0">Mobile</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                          {clouduser?.mobile || "Your Number Here"}
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                              {clouduser?.address || "Your Address Here"}
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
                                    <input type="text" className="form-control" defaultValue={clouduser?.username} value={usernamee} placeholder={clouduser?.username || "Your Name Here"} onChange={(event)=>setusernamee(event.target.value)} />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                    <h6 className="mb-0">Title</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" defaultValue={clouduser?.title} value={title} placeholder={clouduser?.title || "Your Title Here"} onChange={(event)=>setTitle(event.target.value)} />
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
                                      <input type="text" className="form-control" defaultValue={clouduser?.mobile} value={mobile} placeholder={clouduser?.mobile || mobile} onChange={(event)=>setmobile(event.target.value)} />
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
                                      <input type="text" className="form-control" defaultValue={clouduser?.address} value={address} placeholder={clouduser?.address || address} onChange={(event)=>setaddress(event.target.value)}/>
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0"> </h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary" style={{display:'flex',gap:2}}>
                                      <input type="text" className="form-control" defaultValue={clouduser?.state} value={statee} placeholder={clouduser?.state || statee} onChange={(event)=>setstatee(event.target.value)}/>
                                      <input type="text" className="form-control" defaultValue={clouduser?.pincode} value={pincode} placeholder={clouduser?.pincode || pincode} onChange={(event)=>setpincode(event.target.value)}/>
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Profile Picture</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary" aria-placeholder='' style={{gap:15}}>
                                      <input type="file" accept="image/*" className="form-control" onChange={(event)=>setnewprofile(event.target.files[0])} />
                                      <Link onClick={saveProfilePhoto} >Upload</Link>
                                      <p className="material-icons text-info mr-2">{uploadSuccess}</p>
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
                      <small>ALTAI STATE MEDICAL UNIVERSITY : <br/>Admission Approved</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%',backgroundColor:"green"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>FIRST MOSCOW STATE MEDICAL UNIVERSITY : <br/>Admission Rejected</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%',backgroundColor:"red"}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>FIRST MOSCOW STATE MEDICAL UNIVERSITY : <br/>Status Pending</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%',backgroundColor:"yellow"}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>GOMEL STATE MEDICAL UNIVERSITY : <br/>Drwan Back</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%',backgroundColor:"black"}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>TASHKENT MEDICAL ACADEMY : <br/>discrepancy(ies) in detail</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%',backgroundColor:"orange"}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
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
