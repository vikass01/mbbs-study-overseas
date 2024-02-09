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
            
                    <img src={collag[0]?.backgroundurl} alt='hd'></img>
                    <p>
                    {collag[0]?.header?.shordesp}
                    <br />
                    <br />
                    <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <button onClick={()=>Change()}>Go Back</button>
                    <button onClick={()=>{Navigate('/login')}}>Apply Now</button>
                    </div>
                    
                    </p>
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
            A BRIEF LOOK AT MBBS IN {collag[0]?.country.toUpperCase()}
          </h3>
          <br />
          <br />
          <table className="ewrfd">
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
          </table>
        </div>
      </div>

      
    </div>
  
  )
}

export default Useful
