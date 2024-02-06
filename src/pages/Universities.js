import React, { useEffect } from "react";
import DbData from "../components/DB";
import { useState } from "react";
import "../css/Universities.css"
import { Link } from "react-router-dom";
import healthfile from '../assets/true_global_left_v2.png'



const Universities = () => {
    const [collages,setcollages] = useState(DbData.countries.default)
    const [selectedCountry,setselectedCountry] = useState("de")
        
   
    const countrydata =async(data)=>{
        
        if (data === "russia"){
            setcollages(DbData.countries.russia)
        }else if( data === "germany"){
            setcollages(DbData.countries.germany)
        }else if( data === "kazakhstan"){
            setcollages(DbData.countries.germany)
        }else if( data === "georgia"){
            setcollages(DbData.countries.germany)
        }else if( data === "poland"){
            setcollages(DbData.countries.germany)
        }else if( data === "moldova"){
            setcollages(DbData.countries.germany)
        }else if( data === "serbia"){
            setcollages(DbData.countries.germany)
        }else if( data === "nepal"){
            setcollages(DbData.countries.germany)
        }else if( data === "italy"){
            setcollages(DbData.countries.germany)
        }else if( data === "kyrgyzstan"){
            setcollages(DbData.countries.germany)
        }else if( data === "uzbekistan"){
            setcollages(DbData.countries.germany)
        }else if( data === "bangladesh"){
            setcollages(DbData.countries.germany)
        }else if( data === "armenia"){
            setcollages(DbData.countries.germany)
        }else {
            setcollages(DbData.countries.default)
        }

        setselectedCountry(data)
        
    }
    return (
        <div style={{marginTop:150, marginBottom:200,backgroundImage:`URL(${healthfile})`, backgroundSize:'contain'}} >
            <div className="max-w-xl text-center mx-auto lg:max-w-2xl mb-12" >
                <h2 className="mb-6">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative title" style={{color:'#70467E'}}>Excited about studying MBBS?</span>
                    </span>
                </h2>
                {/* <p className="text-sm lg:text-base text-gray-600 font-medium mb-10"> */}
                <div style={{display:'flex', flexWrap:'nowrap', justifyContent:'center', gap:10, padding:"0px 10px", margin:"10px 0px" }}>
                    <select className="bhuio" value={selectedCountry} name="country" id="countries" style={{width:"90%",borderRadius:10}} onChange={(event)=>countrydata(event.target.value)}>
                        <option value="default">Choose Country</option>
                        <option value="russia">Russia</option>
                        <option value="germany">Germany</option>
                        <option value="kazakhstan">Kazakhstan</option>
                        <option value="georgia">Georgia</option>
                        <option value="poland">Poland</option>
                        <option value="moldova">Moldova</option>
                        <option value="serbia">Serbia</option>
                        <option value="nepal">Nepal</option>
                        <option value="italy">Italy</option>
                        <option value="kyrgyzstan">Kyrgyzstan</option>
                        <option value="uzbekistan">Uzbekistan</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="armenia">Armenia</option>
                    </select>
                </div>
                <p className="mb-10 subdesc" style={{padding:'0px 20px',fontSize:12}}>
                Study MBBS in Europe and choose from 8 countries and 16 universities.
                
                <br/>
                <span style={{color:"#70467E"}}>University List in {selectedCountry.charAt(0).toUpperCase()+selectedCountry.slice(1)}</span>
                </p>
                {/* <p style={{color:"#70467E"}}>University List in {selectedCountry.charAt(0).toUpperCase()+selectedCountry.slice(1)}</p> */}
                
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap mx-auto lg:max-w-screen-xxl" >
                
                {
                
                collages.map((elem,index)=>{
                    
                        return <FeatureCard key={index} url={elem.backgroundurl} name={elem.name}/>
                })}
                
            </div>
        </div>
    );
};

export default Universities;

const FeatureCard = ({ url, name, details }) => {
    return (
        <>
            <div className="bhuio" style={{height:170, width:300, backgroundImage:`URL(${url})`, backgroundBlendMode:"darken", backgroundSize:'cover', display:'flex', justifyContent:'center', alignItems:'flex-end',borderRadius:15, }}>
                    <div className="firstCase" style={{padding:10,width:"100%",backgroundColor:"rgba(0,0,0,0.7)", borderBottomRightRadius:15, borderBottomLeftRadius:15 }}>
                        <p style={{fontSize:10, fontWeight:700,color:'#ccc', textAlign:'center'}}>{name.toUpperCase()}</p>
                        <div className="mainCase" >
                            <div style={{width:"100%",display:'flex',justifyContent:'space-between',padding:10, }}>
                                <div className="secondCase" >
                                    <p style={{fontSize:12, fontWeight:700,color:'#ccc', textAlign:'center', }}><Link to="/">Get Complete Details &#10158;</Link></p>
                                </div>
                                <div className="secondCase" >
                                    <p style={{fontSize:12, fontWeight:700,color:'#ccc', textAlign:'center'}}><Link to="/" >Apply Now &#10158;</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    );
};


