import React from "react";

//Icons
import { GiPayMoney } from 'react-icons/gi'
import { FaUniversity } from 'react-icons/fa'
import { BsBriefcaseFill } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { MdModelTraining } from 'react-icons/md'
import { PiStudentFill } from 'react-icons/pi'
const promisebanner = require('../assets/promisebanner.png')
const imagee = "https://image.slidesdocs.com/responsive-images/background/medical-medicine-stethoscope-white-powerpoint-background_8766a01a5c__960_540.jpg"

const Features = () => {
    return (
        <div className="bg-cover bg-center h-auto text-white py-16 px-6 object-fill shadow-2xl rounded-2xl sm:rounded-3xl sm:px-20 sm:py-20" style={{ backgroundImage: `url(${imagee})` }}>
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
                        <span className="relative title" style={{color:'#70467E'}}>Features</span>
                    </span>
                </h2>
                {/* <p className="text-sm lg:text-base text-gray-600 font-medium mb-10"> */}
                <p className="mb-10 subdesc" >
                    Our entire team works enthusiastically to guide you about Mbbs Study Overseas Programs
                    which give you the following benefits:
                </p>
            </div>
            {/* <div className="flex flex-wrap -mx-4 w-[80%] h-[80%]"> */}
            <div className="flex flex-wrap mx-auto md:max-w-xl lg:max-w-screen-xl">
                <FeatureCard
                    title="No/Low Tuition Fee Charge"
                    details="We provide no/low tuition fee options for accessible and affordable education."
                    icon={
                        <GiPayMoney className="text-white w-auto h-32" />
                    }
                />
                <FeatureCard
                    title="Higher Ranked University"
                    details="We offer programs affiliated with higher-ranked universities for quality education."
                    icon={
                        <FaUniversity className="text-white w-auto h-32" />
                    }
                />
                <FeatureCard
                    title="Better Job Prospects"
                    details="Our programs provide better job prospects for future career success."
                    icon={
                        <BsBriefcaseFill className="text-white w-auto h-32" />
                    }
                />
                <FeatureCard
                    title="Skill Based Programs"
                    details="To enhance practical expertise and career readiness."
                    icon={
                        <GiSkills className="text-white w-auto h-32" />
                    }
                />
                <FeatureCard
                    title="On the Job Training"
                    details="To provide real-world experience and practical skills."
                    icon={
                        <MdModelTraining className="text-white w-auto h-32" />
                    }
                />
                <FeatureCard
                    title="Scholarship & Financial Aid"
                    details="To support students in pursuing their educational goals."
                    icon={
                        <PiStudentFill className="text-white w-auto h-32" />
                    }
                />
            </div>
        </div>
    );
};

export default Features;

const FeatureCard = ({ icon, title, details }) => {
    return (
        <>
            {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3"> */}
            <div className="mt-10 px-2 w-1/2 lg:w-1/6">
                <div className="mb-2 rounded-[20px] bg-white p-4 shadow-md md:px-2 xl:px-5 flex items-center justify-center flex-col" style={{maxWidth:150, height:250}}>
                    <div
                        className={`mb-6 flex h-[60px] w-[60px] p-3 items-center justify-center rounded-2xl`} style={{backgroundColor:'#70467E'}}>
                        {icon}
                    </div>
                    <h4 className="text-sm sm:text-base mb-2 font-semibold" style={{color:'#70467E', textAlign:'center'}}>{title}</h4>
                    {/* <p className="text-base font-medium">{details}</p> */}
                </div>
            </div>
        </>
    );
};
