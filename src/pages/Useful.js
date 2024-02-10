import React from 'react'
import "../css/GetUniversityDetail.css"
import { useNavigate } from "react-router-dom";


function Useful(props) {
    const {Change, collag} = props
    console.log(collag);
  const Navigate = useNavigate()    

  return (
    
      <div className="vbgy">
        
            <div className="wityu">
                    <h1 className='text-center text-xl pt-10 px-10'>MBBS IN {collag[0]?.country.toUpperCase()}: Top Medical Universities, Fees Structure, Admission</h1>
                    <div className='vfrty' style={{width:"100%", height:"fitContent", backgroundColor:"#70467E", color:"#fff", display:"flex",justifyContent:"center",flexDirection:"row", alignItems:"center"}}>
                          <div className='sert'>
                              <div style={{width:"50%"}}>
                                  <img src={collag[0]?.backgroundurl} alt='hd'></img>
                              </div>
                          </div>
                          <div className='vgty' style={{display:"flex", justifyContent:"center",flexDirection:"column", alignItems:"center"}}>
                              <p >
                              {collag[0]?.header?.shordesp}
                              <br />
                              <br />
                              </p>
                              <div style={{display:'flex', justifyContent:'space-evenly', gap:30}}>
                                  <button onClick={()=>Change()}>Go Back</button>
                                  <button onClick={()=>{Navigate('/login')}}>Apply Now</button>
                              </div>
                          </div>
                     </div>      
            </div>

      {/* 00000000000000000000000000000000000000000000000000000 */}

      <div className="nffd">
        
            <img src="https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-17.png" alt='pic'></img>
        
        <div className="nhjip">
          <h3
            style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}
          >
            A BRIEF LOOK AT MBBS IN {collag[0]?.country}
          </h3>
          <br />
          <br />
          <table className="ewrfd">
            <tbody>
            <tr>
              <td>Capital</td>
              <td>{collag[0]?.brief?.capital}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{collag[0]?.brief?.population}</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>{collag[0]?.brief?.medium}</td>
            </tr>
            <tr>
              <td>Medium of Instruction</td>
              <td>{collag[0]?.brief?.medium}</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>{collag[0]?.brief?.currency}</td>
            </tr>
            <tr>
              <td>International Airport</td>
              <td>{collag[0]?.brief?.in_airport}</td>
            </tr>
            <tr>
              <td>Recognition</td>
              <td>{collag[0]?.brief?.recognition}</td>
            </tr>
            <tr>
              <td>Course Duration</td>
              <td>{collag[0]?.brief?.duration}</td>
            </tr>
            <tr>
              <td>Average cost of stay (Fee included)</td>
              <td>{collag[0]?.brief?.cost_of_stay}</td>
            </tr>
            <tr>
              <td>Intake</td>
              <td>{collag[0]?.brief?.intake}</td>
            </tr>
            <tr>
              <td>Hostel Expense</td>
              <td>{collag[0]?.brief?.hostel}</td>
            </tr>
            <tr>
              <td>Score Required in 10+2</td>
              <td>{collag[0]?.brief?.score_required}</td>
            </tr>
            <tr>
              <td>NEET Requirement</td>
              <td>{collag[0]?.brief?.neet_req}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{width:"100%", display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div style={{width:"82%"}}>
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>What are the Courses Offered by {collag[0]?.country} Medical Universities?</h1>
            <h2 style={{textAlign:'justify', marginTop:10}}>Here are the courses that are offered by {collag[0]?.country} MBBS Medical Universities. It will help you to achieve your dreams of becoming a doctor.</h2>
            <table style={{width:'100%',marginTop:20}}>
            <tbody>
              <tr>
                <td style={{fontSize:14}}>S.No.</td>
                <td style={{fontSize:14}}>Courses</td>
                <td style={{fontSize:14, textAlign:"center"}}>Duration (in years)</td>
              </tr>
              <tr>
                <td style={{fontSize:12}}>1.</td>
                <td style={{fontSize:12}}>MBBS/ MD</td>
                <td style={{fontSize:12, textAlign:"center"}}>6</td>
              </tr>
              <tr>
                <td style={{fontSize:12}}>2.</td>
                <td style={{fontSize:12}}>Dentistry</td>
                <td style={{fontSize:12, textAlign:"center"}}>5</td>
              </tr>
              <tr>
                <td style={{fontSize:12}}>3.</td>
                <td style={{fontSize:12}}>Pharmacy</td>
                <td style={{fontSize:12, textAlign:"center"}}>4</td>
              </tr>
              <tr>
                <td style={{fontSize:12}}>4.</td>
                <td style={{fontSize:12}}>Nursing</td>
                <td style={{fontSize:12, textAlign:"center"}}>4</td>
              </tr>
              </tbody>
            </table>
        </div>

        <div style={{width:"82%", marginTop:20}}> 
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>Duration of Studying MBBS Course from {collag[0]?.country}</h1>
            <h2 style={{textAlign:'justify', margin:"10px 0px", textDecoration:'underline'}}>The total term of MBBS {collag[0]?.country} is of 6 years which are in points below for your better understanding,</h2>
            <ul>
            {collag[0].duration.map((element,index) => {
                return <li key={index} >&#8226; {element}</li>
            })}
            </ul>

        </div>

        <div style={{width:"82%", margin:"20px 0px"}}> 
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>Medium of Teaching While Studying MBBS in {collag[0]?.country}</h1>
            <h2 style={{textAlign:'justify', margin:"10px 0px", textDecoration:'underline'}}>Every medical college in {collag[0]?.country} that is certified by the WHO and NMC use English as the primary language because:</h2>
            <ul>
            {collag[0].medium_teaching.map((element,index) => {
                return <li key={index} >&#8226; {element}</li>
            })}
            </ul>

        </div>

        <div style={{width:"82%", margin:"20px 0px"}}> 
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>Intake of MBBS Study in {collag[0]?.country}</h1>
            <h2 style={{textAlign:'justify', margin:"10px 0px", textDecoration:'underline'}}>Intake of MBBS Study:</h2>
            <ul>
            {collag[0].intake.map((element,index) => {
                return <li key={index} >&#8226; {element}</li>
            })}
            </ul>

        </div>

        <div style={{width:"82%", margin:"20px 0px"}}> 
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>Eligibility Criteria for MBBS in {collag[0]?.country}</h1>
            <h2 style={{textAlign:'justify', margin:"10px 0px", textDecoration:'underline'}}>Here are some criteria to be eligible in getting admission in top medical universities in {collag[0]?.country}:</h2>
            <ul>
            {collag[0].eligibility.map((element,index) => {
                return <li key={index} >&#8226; {element}</li>
            })}
            </ul>

        </div>

        <div style={{width:"82%", margin:"20px 0px"}}> 
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>What is the admission process for MBBS in {collag[0]?.country} 2024-2025</h1>
            <h2 style={{textAlign:'justify', margin:"10px 0px", textDecoration:'underline'}}>The admission process for getting admission in colleges for MBBS in {collag[0]?.country} is very easy, simply basic, and free from hassles.</h2>
            <ul>
              <li>&#8226; Fill the application form of the different medical universities from which you want to do MBBS</li>
              <li>&#8226; Upload the required documents including academic certificates, German and English language,proficiency certificate, passport, and &#8226; other demanded documents.</li>
              <li>&#8226; Wait for the confirmation sent from an institution shortlisting your application form.</li>
              <li>&#8226; When an offer letter comes to you, you must save it for the future.</li>
              <li>&#8226; Pay the University and enrolment fees.</li>
              <li>&#8226; When the fees process is completed, then go for the VISA.</li>
              <li>&#8226; Get all your documents checked, validated, and authenticated prior to VISA application</li>
              <li>&#8226; Visit German Embassy in Delhi after you receive the Invitation Letter</li>
              <li>&#8226; Proof of strong financial need to be shown to support your medical education in Germany</li>
              <li>&#8226; Get a VISA for Germany then book a flight ticket for there.</li>
            
            </ul>
        </div>

        <div style={{width:"82%", margin:"20px 0px"}}> 
            <h1 style={{
              backgroundColor: "#70467E",
              padding: "10px",
              borderRadius: "10px",
              color:"#fff"
            }}>Required Documents for MBBS Admission in {collag[0]?.country} 2024-2025</h1>
            <h2 style={{textAlign:'justify', margin:"10px 0px", textDecoration:'underline'}}>List of Documents:</h2>
            <ul>
            {collag[0].documents.map((element,index) => {
                return <li key={index} >&#8226; {element}</li>
            })}
            </ul>
            <input onClick={()=>Navigate("/login")} style={{backgroundColor:"#70467E", color:"#fff"}} type='button' value="Planning to Study MBBS ?"/>
        </div>
        



      </div>

      
    </div>
  
  )
}

export default Useful
