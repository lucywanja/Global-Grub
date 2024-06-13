import React from 'react';


const Navbar= () => {
    return(
        <div>

            <nav className="flex flex-row justify-between items-center p-4 bg-orange-500 text-white">
            <h1 className="text-2xl font-bold">The Meal DB</h1>

            <div className="relative">
                <input
                    type="text"
                    className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Search a Meal..."
                />
                <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-white">
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                    </svg>
                </button>
                </div>

            </nav> 
        </div>
    )

}

export default Navbar;