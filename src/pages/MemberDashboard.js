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






const MemberDashboard=()=> {

  const {authUser} = useContext(Context);
  console.log("data received in home.js", authUser);
  var navigate = useNavigate()
  const auth = getAuth(app);
  console.log('direct auth data',auth);
  const storage = getStorage(app)

  const [usernamee, setusernamee] = useState("John sing doe")
  const [mobile,setmobile] = useState("(239) 816-9029")
  const [address,setaddress] = useState("Bay Area, San Francisco, CA")
  const [statee,setstatee] = useState("Maharashtra")
  const [pincode,setpincode] = useState("456789")
  const [newprofile, setnewprofile] = useState("https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg")
  const [editprofile,seteditprofile] = useState(true)


  
  
  

  
 
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

  
    

  const saveEditData =async(e)=>{
      console.log(usernamee,mobile,address,statee,pincode);
      const storeLocation = ref(storage, `profileImages/${authUser.user.uid}.png`)
      await uploadBytes(storeLocation, newprofile).then(() => {
      });
      await getDownloadURL(storeLocation).then((url) => {
      updateProfile(auth.currentUser, {
        displayName: usernamee, photoURL: url
      }).then((resp)=>{console.log("upload url response",resp)})
      })
      
    
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
                  <div className="d-flex flex-column align-items-center text-center">
                    {/* <img src={authUser.auth.currentUser.photoURL||"https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" className="rounded-circle" width={150} /> */}
                    <img src={authUser.user.photoURL} alt="Admin" className="rounded-circle" style={{width:150}} />
                    {/* <div style={{position:'absolute'}}>
                      <img alt='bbb' src={photo} style={{height:100,width:100}}/>
                    <input type='file' placeholder='Upload Picture' onChange={upladPicture} />
                    </div> */}
                    <div className="mt-3">
                      {/* <p>{authUser.auth.currentUser.displayName||"abc kumar"}</p> */}
                      <p>{authUser.user.displayName}</p>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-primary" style={{marginRight:5}} >Follow</button>
                      <button className="btn btn-outline-primary" onClick={userLogout}>Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                    <span className="text-secondary">bootdey</span>
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
                              {authUser.user.displayName}
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
                      <hr />
                      <div className="row" style={{marginTop:5}}>
                          <div className="col-sm-12" onClick={()=>seteditprofile(false)}>
                              <Link className="btn btn-info " to='#' >Edit</Link>
                          </div>
                      </div>
                      </div>
                </div>:


              
              
              
              <div className="col-lg-8 editProfile" >
                    <div className="card">
                        <div className="card-body">
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" placeholder={authUser.user.displayName || "Mr. John Dicosta"} onChange={(event)=>setusernamee(event.target.value)} />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Email</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" placeholder= {authUser.user.email || "john@example.com"} disabled/>
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
                                      <input type="file" className="form-control" onChange={(event)=>setnewprofile(event.target.files[0])} />
                                  </div>
                              </div>
                                  
                                <div className="text-secondary" style={{display:'flex',justifyContent:'flex-start', flexDirection:'row-reverse', width:'100%', gap:130}}>                                          
                                    <Link className="btn btn-info "  onClick={saveEditData} > Save Data  </Link>
                                    <Link className="btn btn-info "  onClick={()=>seteditprofile(true)} > Back  </Link>                                      
                                </div>
                                                                            
                            </div>
                              
                        </div> 
                        
                           
                    </div>}

                    
              
              {/* 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}
              <div className="row gutters-sm" style={{marginTop:20}}>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
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
