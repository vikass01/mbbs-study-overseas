import React, {  useContext, useEffect, useState } from 'react'
import { Dialog,  Popover,  } from '@headlessui/react'
import app from '../Config';
import { Link, useNavigate } from 'react-router-dom';

//icons
import {
    Bars3Icon,
    
} from '@heroicons/react/24/outline'

import { FaAngleRight, FaArrowRight } from 'react-icons/fa'

//images
import brandicon from '../assets/brandlogo.png'
import brandiconmd from '../assets/brandlogomd.png'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Context } from '../App';







const LoggedUserMenu = () => {
    const {authUser} = useContext(Context);
    console.log("testingggggggg",authUser.user.emailVerified)
    const Navigate = useNavigate()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   
    const [userLogged, setuserLogged] = useState(false);
    

    // useEffect(()=>{
    //     const auth = getAuth(app);   
    // onAuthStateChanged(auth, (user) => {
    //     if(user?.email){
    //         setuserLogged(true)
    //       }else {
    //         setuserLogged(false)
    //       }
    // })

        
            


    // },[])

    

   

    const navMyAccount =()=>{
               
        setMobileMenuOpen(false)
        
    }

    // const zfzfzf =()=>{
    //     setPopoverOpen(false);
    // }

    // const userLogout =()=>{
    //     const auth = getAuth(app);
    //     setMobileMenuOpen(false)
    //     auth.signOut().then(() => {
    //         // Sign-out successful.
    //             console.log("Signed out successfully")
    //             navigate('/login')
    //         }).catch((error) => {
    //         // An error happened.
    //         console.log(error);
    //         });
    // }

    

    return (
        <div className='bg-white'>
            <header className='absolute inset-x-0 top-0 z-50'>
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">MBBS STUDY OVERSEAS</span>
                            <img className="h-10 w-auto lg:hidden" src={brandiconmd} alt="brandlogo" />
                            <img className="hidden h-10 w-auto lg:block" src={brandicon} alt="brandlogo" />
                        </Link>
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                   
                </nav>

                {/* Responsive */}

                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Mbbs Study Overseas</span>
                                {/* <img
                                    className="h-8 w-auto"
                                    src={brandicon}
                                    alt="Branding"
                                /> */}
                            </Link>

                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <div className='mt-2 h-6 w-6'></div>
                                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                            </button>
                        </div>
                        <div className="mt-16 flow-root" >
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link
                                        to="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    {/* <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50">
                                                    Programs
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...programs, ...callsToAction].map((item,index) => (
                                                        <Link
                                                            key={index}
                                                            to={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                            <span className='text-primary font-bold'>{item.direct}</span>
                                                        </Link>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure> */}
                                    <Link
                                        to="/universities"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Universities
                                    </Link>
                                    <Link
                                        to="/blogs"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Blogs
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Company
                                    </Link>
                                    <Link
                                        to="/connect"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                                <div className="py-6">
                                    {/* <Link
                                        to="/connect"
                                        className="inline-block rounded-xl px-3 py-2 text-base font-extrabold leading-7 text-primary border-2 border-primary hover:bg-primary-hover hover:text-white" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Connect
                                    </Link> */}
                                    {/* <Link style={{marginBottom:20}}
                                        to="/connect"
                                        className="rounded-xl text-base font-extrabold leading-7 text-primary hover:bg-primary-hover hover:text-white 
                                        flex gap-1.5 items-center" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact us <FaArrowRight />
                                    </Link> */}
                                    {userLogged? 
                                    <Link
                                        to="/home"
                                        onClick={navMyAccount}
                                        className="rounded-xl text-base font-extrabold leading-7 text-primary hover:bg-primary-hover hover:text-white 
                                        flex gap-1.5 items-center" 
                                    >
                                        My Account <FaArrowRight />
                                    </Link>
                                    :
                                    <Link
                                        to="/login"
                                        className="rounded-xl text-base font-extrabold leading-7 text-primary hover:bg-primary-hover hover:text-white 
                                        flex gap-1.5 items-center" onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Login <FaArrowRight />
                                    </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}

export default LoggedUserMenu