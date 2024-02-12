import React from 'react'

function LoggedUserMenu() {
  return (
    <>
    <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Mbbs Study Overseas</span>
                            </Link>

                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <div className='mt-2 h-6 w-6'></div>
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
                                
                            </div>
                        </div>
                        </>
  )
}

export default LoggedUserMenu

