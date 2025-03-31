import React from "react";

export default function Card_Resume() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-16 sm:py-24 lg:py-32 min-h-screen"> {/* Add min-h-screen to make it fill the screen */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white">Resume</h2> {/* Increased font size */}
          <p className="mt-4 text-2xl text-white"> {/* Increased font size */}
            
          </p>
        </div>

        <div className="flex justify-center gap-8">
          {/* Pricing Cards */}
          <div className="bg-white bg-opacity-20 shadow-xl rounded-xl p-6 w-150 text-center"> {/* Increased width */}
           
            <div className="mt-6">
              <img src="/Resume.jpg" alt="Description" />
            </div>

            

            
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="text-sm text-purple-600 font-semibold">
            Monthly
          </button>
          <span className="mx-2">|</span>
          <button className="text-sm text-gray-500 font-semibold">
            Annually
          </button>
        </div>
      </div>
    </div>
  );
}
