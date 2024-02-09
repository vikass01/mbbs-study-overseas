import React from "react";
import DbData from "../components/DB";
import { useState } from "react";
import "../css/Universities.css"
import { Link } from "react-router-dom";
import UniversityHeader from "../components/UniversityHeader";
import Useful from "./Useful";



const Universities = () => {
    const [collages,setcollages] = useState(DbData.countries.russia)
    const [selectedCountry,setselectedCountry] = useState("de")
    const [showCountry,setShowCountry] = useState(true)
    
    
    const countrydata =async(data)=>{
        
        if (data === "russia"){
            setcollages(DbData.countries.russia)
        }else if( data === "germany"){
            setcollages(DbData.countries.germany)
        }else if( data === "kazakhstan"){
            setcollages(DbData.countries.kazakhstan)
        }else if( data === "georgia"){
            setcollages(DbData.countries.georgia)
        }else if( data === "poland"){
            setcollages(DbData.countries.poland)
        }else if( data === "moldova"){
            setcollages(DbData.countries.moldova)
        }else if( data === "serbia"){
            setcollages(DbData.countries.serbia)
        }else if( data === "nepal"){
            setcollages(DbData.countries.nepal)
        }else if( data === "italy"){
            setcollages(DbData.countries.italy)
        }else if( data === "kyrgyzstan"){
            setcollages(DbData.countries.kyrgyzstan)
        }else if( data === "uzbekistan"){
            setcollages(DbData.countries.uzbekistan)
        }else if( data === "bangladesh"){
            setcollages(DbData.countries.bangladesh)
        }else if( data === "armenia"){
            setcollages(DbData.countries.armenia)
        }else {
            setcollages(DbData.countries.default)
        }

        setselectedCountry(data)
        
    }

    const funChange =()=>{
        setShowCountry(true)
    }
    return (
        <>
        <UniversityHeader/>
        {showCountry ? 
        <div style={{ marginBottom:100}} >
            
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
                        {/* <span className="relative title" style={{color:'#70467E'}}>Excited about studying MBBS?</span> */}
                    </span>
                </h2>
                {/* <p className="text-sm lg:text-base text-gray-600 font-medium mb-10"> */}
                <div style={{position:'relative',top:-25,zIndex:100,display:'flex', flexDirection:"column", flexWrap:'nowrap',                  justifyContent:'center', alignItems:"center", gap:10, padding:"0px 10px", margin:"10px 0px" }}>
                    <label style={{width:"100%"}} htmlFor="country">Choose a Country:
                    <select className="vbnm" value={selectedCountry} name="country" id="countries" style={{width:"90%",borderRadius:10,}} onChange={(event)=>countrydata(event.target.value)}>
                        {/* <option value="default">Choose Country</option> */}
                        <option value="russia">Russia</option>
                        <option value="germany" >Germany</option>
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
                    </label>
                    <Link onClick={()=>setShowCountry(false)} style={{margin:'5px 0px'}}><span style={{color:'blue'}}>Click here</span> : Useful About {selectedCountry} </Link>
                </div>
                {/* <p className="mb-10 subdesc" style={{padding:'0px 20px',fontSize:12}}>
                Study MBBS in Europe and choose from 8 countries and 16 universities.
                
                <br/>
                <span style={{color:"#70467E"}}>University List in {selectedCountry.charAt(0).toUpperCase()+selectedCountry.slice(1)}</span>
                </p> */}
            </div>
            
            <div style={{position:'relative',top:-60, }} className="mkimki flex justify-center items-center gap-4 flex-wrap mx-auto lg:max-w-screen-xxl" >
                
                {
                
                collages.map((elem,index)=>{
                    
                        return <FeatureCard key={index} url={elem.backgroundurl} name={elem.name} id={elem.id}/>
                })}
                
            </div>
        </div>
        : 
        <div>
            <Useful Change={funChange} collag={collages}  />
            <Link onClick={()=>setShowCountry(true)} style={{margin:'5px 0px'}}>Back </Link>
        </div>
        }
        </>
    );
};

export default Universities;

const FeatureCard = ({ url, name, id }) => {
    return (
        <>
            <div className="bhuio bnmk" style={{backgroundImage: `URL(${url})`, backgroundPosition:"center",backgroundColor:"rgba(0,0,0,0.1)", backgroundBlendMode:"darken", backgroundSize:'cover', display:'flex', justifyContent:'center', alignItems:'flex-end',borderRadius:3, }}>
                    <div className="firstCase" style={{padding:10, width:"100%",backgroundColor:"rgba(0,0,0,0.5)", borderBottomRightRadius:5, borderBottomLeftRadius:5 }}>
                        <p className="vfr">{name.toUpperCase()}</p>
                        <div className="mainCase" >
                            <div className="subMainCase" >
                                <div className="firstCase" >
                                    <p className="vfr"><Link to={`/getdetail/${id}`} className="xcxc " >Get Details &#10158;</Link></p>
                                </div>
                                <div className="secondCase" >
                                    <p className="vfr"><Link to="/login" className="xcxc " >Apply Now &#10158;</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    );
};


