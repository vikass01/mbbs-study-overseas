import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DbData from '../components/DB';
import "../css/GetUniversityDetail.css"
import { useNavigate } from "react-router-dom";


function GetUniversityDetail() {
  const Navigate = useNavigate()    
const params = useParams()
const [temp, settemp] = useState(0)




useEffect(()=>{
  const anddbData = async()=>{
    const {russia,germany,kazakhstan,georgia,moldova,poland,serbia,nepal,italy,kyrgyzstan,uzbekistan,bangladesh,armenia} = DbData.countries
    const newData = await russia.concat(germany,kazakhstan,georgia,moldova,poland,serbia,nepal,italy,kyrgyzstan,uzbekistan,bangladesh,armenia)
    const ff = await newData.find((elem)=>{
      return elem.id === params.id
    })
  
      if (ff !== undefined){
      settemp(ff)
      }else{
        console.log("found ff undefined");
      }
   
  }
  
  anddbData()
},[params])



  return (
    <div style={{margin:"100px 0px"}}>
      <div className="vbgy">
     
        

      {/* 0000000000000000000000000000000000000000000000000000000000000000000000    */}
      <div className="cxdsf">
        <div className="ugvuids">
          <h2>UNIVERSITY OF BANGLADESH</h2>
          <table className="table" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear">
                <tr>
                    <th className="th title">AFFILIATED UNIVERSITY</th>
                    <th className="th title2">TUTION FEE</th>
                    <th className="th title2">HOSTAL FEE</th>
                    <th className="th title2">OTC</th>
                </tr>
                {/* <!-- 1 --> */}
                <tr>
                    <td className="td">SMU</td>
                    <td className="td">45,950$</td>
                    <td className="td">Included</td>
                    <td className="td">Extra</td>
                </tr>
                
                
            </table>
        </div>
      </div>
      <section className="ugvui">
      <ul>
                <li className="para"  data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"><span>■</span>Above mentioned tution fee changable according to their academic session.</li>
    
                
            </ul>
      </section>

      {/* 0000000000000000000000000000000000000000000000000000000000000000000000 */}

      {/* <div className="gsfas">
        <h3>BASHKIR STATE MEDICAL UNIVERSITY</h3>

        <div className="sdgdfghf">
          <img src="https://www.metaeducationindia.com/wp-content/uploads/2021/02/Bashkir-state-medical-university.jpg"></img>
          <p>
            Bashkir State Medical University was established in 1932. It is one
            of the leading medical universities in the Russian Federation. With
            more than 8000 students from 40 different countries, it is the most
            suitable choice for MBBS in Russia. Formerly introduced as
            Bashkortostan Institute in Ufa, Bashkir State Medical University is
            the top institution in the center of the medical and pharmaceutical
            sciences of the Republic of Bashkortostan.
            <br />
            <strong>pESTO. : 1932</strong>
            <br />
            <strong>University Type : Government</strong>
            <br />
            <strong>Medium : English</strong>
            <br />
            <strong>ESTO. : No. of Indian Students : 500+</strong>
            <br />
          </p>
        </div>
      </div> */}

      {/* 0000000000000000000000000000000000000000000000000 */}

      {/* <div className="packageForFirstYear">
        <table className="table fgjhfghfg" border="1">
          <h2 style={{ textAlign: "center", width: "100%" }}>
            PACKAGE FOR 1ST YEAR STUDENT
          </h2>
          <thead>
            <tr rules="rows">
              <td>TUITION FEE</td>
              <td>HOSTEL FEE</td>
              <td>
                IMMIGRATION CLERANCE,AIRPORT PICKUP, ARRIVAL MEAL, TRANSLATION
                AND ATTESTATION OF DOCUMENTS IN UNIVERSITY, MEDICAL INSURANCE &
                MEDICAL CHECKUP, LOCAL POLICE VERIFICATION, BIOMETRIC AND VISA
                EXTENTION, HOSTEL ALLOTMENT, BANK ACCOUNT OPENING, LOCAL SUPPORT
                ETC
              </td>
              <td>INCENTIVE</td>
            </tr>

            <tr>
              <td>2.94,120RUB</td>
              <td>13,00RUB</td>
              <td>2300$</td>
              <td>1000$</td>
            </tr>
          </thead>
        </table>
        <p className="para border">FOOD FEE PER MONTH - 120$</p>
        <p className="para border pb0">
          ADMISSION FEE, VISA PROCESSING & DOCUMENTATION ( 25-35000) | FLIGHT
          TICKET AS PER ACTUAL.
        </p>
      </div> */}

      {/* 000000000000000000000000000000000000000000000000000000000000000 */}

      {/* <div
        className="packageForSixYear"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <h3 className="packagewhite">PACKAGE FOR 2ND TO 6TH YEAR STUDENT</h3>
        <table className="table">
          <tr>
            <th className="th title2">Package</th>
            <th className="th title2">2nd</th>
            <th className="th title2">3rd</th>
            <th className="th title2">4th</th>
            <th className="th title2">5th</th>
            <th className="th title2">6th</th>
          </tr>

          <tr>
            <td className="td ">Tuition Fee</td>
            <td className="td">2,94,120RUB</td>
            <td className="td">2,94,120RUB</td>
            <td className="td">2,94,120RUB</td>
            <td className="td">2,94,120RUB</td>
            <td className="td">2,94,120RUB</td>
          </tr>

          <tr>
            <td className="td">Hostel Fee</td>
            <td className="td">13,000RUB</td>
            <td className="td">13,000RUB</td>
            <td className="td">13,000RUB</td>
            <td className="td">13,000RUB</td>
            <td className="td">13,000RUB</td>
          </tr>

          <tr>
            <td className="td">Medical Insurance VISA Extention</td>
            <td className="td">200$</td>
            <td className="td">200$</td>
            <td className="td">200$</td>
            <td className="td">200$</td>
            <td className="td">200$</td>
          </tr>
        </table>
      </div>

      <div className="mainSec">
        <ul>
          <li className="para">
            <span>
              {" "}
              IMPORTANT NOTE <b>:</b>
            </span>
            <br />
            <br />
            <p
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              BSMU has a huge clinic where over 24000 patients visit annually
              which helps students to be in practical touch. <br />
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              Bashkir State Medical University provides Simulation Based
              Training in the Simulation Centre.
              <br />
            </p>
            <p
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              The University provides Russian language training for bilingual
              coaching.
              <br />
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              University has a diverse culture with 8000 foreign students coming
              from 40 different countries. <br />
            </p>
            <p
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              There are fully equipped laboratories with modern equipment.
            </p>
          </li>
        </ul>
      </div> */}
    </div>
    </div>
  )
}

export default GetUniversityDetail
