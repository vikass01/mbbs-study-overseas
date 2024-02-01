import React, { useEffect, useState } from 'react'
import app from '../Config';
import { getAuth, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import "../css/MemberDashboard.css"
import { Link } from 'react-router-dom';
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";
const storage = getStorage(app);




function MemberDashboard() {
  
  const navigate = useNavigate()
 const [userData,setuserData] = useState(null)
const [editprofile,seteditprofile] = useState(true)
const [photo,setphoto] = useState("https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png")

const getData =()=>{
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    
    if (user) {
      if(!user.emailVerified){
        alert('Please Verify Email, Link Sent on your email id')
        sendEmailVerification(auth.currentUser).then(() => {
          console.log("Email verification sent!");
        })
      }else if(user.emailVerified){
        setuserData(user)
        console.log(user);
      }
      
    } else {
      console.log("something bad ");
    }
  });
}

  useEffect(()=>{  
    getData()
    // const auth = getAuth(app);
    // const urlProfile = ref(storage, `profileImages/${auth.currentUser?.uid}.png`)
    // getDownloadURL(urlProfile)
    // .then((url) => {
    //   setphoto(url)
    //   console.log('this is error', url);
    // })
    
   }, [])
     
  

  
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

  const updateaccount=async()=>{
    const auth = await getAuth(app);
    const result = await updateProfile(auth.currentUser, {
      displayName: "Jane singh User", photoURL: "https://bootdey.com/img/Content/avatar/avatar7.png", phoneNumber: "9891012345"
    })

    console.log(result);
    getData()
  }

  const getpic =async()=>{
    const auth = await getAuth(app);
    const mountainsRef = ref(storage, `profileImages/${auth.currentUser.uid}.png`)
    await uploadBytes(mountainsRef, photo).then((response) => {
      console.log('Uploaded a blob or file!');
      console.log("command 2");
      getDownloadURL(mountainsRef)
    .then((url) => {
      console.log('this is url',url);
      console.log("command 3");
    })
      
    });
    
  }

  const profilepictureurl = async()=>{
    const auth = await getAuth(app);
    const url = ref(storage, `profileImages/${auth.currentUser.uid}.png`);
    await getDownloadURL(url)
    .then((url) => {
      console.log('this is url',url);
      console.log("command 3");
    })
  }
    

  const upladPicture =async(e)=>{
      try {
        setphoto(e.target.files[0])
        console.log("command 1");
      } catch (error) {
        console.log("command 1 error");
      }
      
      getpic()
      profilepictureurl()
    
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
                    <img src={userData?.auth?.currentUser?.photoURL} alt="Admin" className="rounded-circle" width={150} />
                    {/* <div style={{position:'absolute'}}>
                      <img alt='bbb' src={photo} style={{height:100,width:100}}/>
                    <input type='file' placeholder='Upload Picture' onChange={upladPicture} />
                    </div> */}
                    <div className="mt-3">
                      <p>{userData?.auth?.currentUser?.displayName}</p>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-primary" style={{marginRight:5}} onClick={updateaccount}>Follow</button>
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
                              {userData?.auth?.currentUser?.displayName}
                          </div>
                      </div>
                      <hr />
                      <div className="row">
                          <div className="col-sm-3">
                              <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {userData?.auth?.currentUser?.email}
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
                                    <input type="text" className="form-control" defaultValue="John Doe" />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Email</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" defaultValue="john@example.com" />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Phone</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" defaultValue="(239) 816-9029" />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Mobile</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" defaultValue="(320) 380-4539" />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0">Address</h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary">
                                      <input type="text" className="form-control" defaultValue="Bay Area, San Francisco, CA" />
                                  </div>
                              </div>
                              <div className="row mb-0">
                                  <div className="col-sm-3">
                                      <h6 className="mb-0"> </h6>
                                  </div>
                                  <div className="col-sm-9 text-secondary" style={{display:'flex',gap:2}}>
                                      <input type="text" className="form-control" defaultValue="State" />
                                      <input type="text" className="form-control" defaultValue="Pin Code" />
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-sm-3" />
                                      <div className="col-sm-9 text-secondary" onClick={()=>seteditprofile(true)}>
                                          <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" />
                                      </div>
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
