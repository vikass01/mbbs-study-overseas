import React, { useEffect } from "react";
import DbData from "../components/DB";
import { useState } from "react";



const Universities = () => {
    const [collages,setcollages] = useState(DbData.default)
    const [selectedCountry,setselectedCountry] = useState("")
        
    useEffect(()=>{
        console.log('selectedCountry',selectedCountry);
    },[])
      
    const countrydata =(data)=>{
        console.log(data);
        setselectedCountry(data)
        const fz = data.toString()
        console.log(`${DbData}.${fz}`);
    }
    return (
        <div style={{marginTop:150, marginBottom:200}}>
            <div className="max-w-xl text-center mx-auto lg:max-w-2xl mb-12">
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
                    <select value={selectedCountry} name="country" id="countries" style={{width:"90%",borderRadius:10}} onChange={(event)=>countrydata(event.target.value)}>
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
                <p className="mb-10 subdesc" style={{padding:'0px 20px'}}>
                Study MBBS in Europe and choose from 8 countries and 16 universities.
                <br/>
                With our help you can!
                </p>
                <p style={{color:"#70467E"}}>University List in Russia</p>
                
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
            <div style={{height:170, width:300, backgroundImage:`URL(${url})`, backgroundSize:'cover', display:'flex',justifyContent:'center', alignItems:'center',borderRadius:15  }}>
                    <div style={{padding:10,backgroundColor:"rgba(0,0,0,0.5)", borderRadius:10}}>
                        <p style={{fontSize:15, fontWeight:700,color:'#ccc', textAlign:'center'}}>{name.toUpperCase()}</p>
                    </div>
            </div>
        </>
    );
};
