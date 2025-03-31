// src/App.js
import React from "react";
import more_project from "./more_project";
export default function Card_project() {
  return (
    
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-16 sm:py-24 lg:py-32">
    
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Project</h2>
          <p className="mt-4 text-lg text-white">
            นี่คือตัวอย่างโปรดจคที่ได้ทำไว้
          </p>
        </div>

        <div className="flex justify-center gap-8">
          {/* Pricing Cards */}
          <div className="bg-white bg-opacity-20 shadow-xl rounded-xl p-6 w-72 text-center">
    <h3 className="text-xl font-semibold text-gray-900">ระบบจองคิวร้านชาบู</h3>
    <p className="mt-2 text-gray-500">เว็บแอปพลิเคชั่น</p>
    <div className="mt-6">
        <img src="/img_1.jpg" alt="Description" />
    </div>
    <div className="mt-4 flex space-x-1 justify-center"> 
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            React
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            NodeJS
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            MySQL
        </button>
    </div>
    <br />
    <br />
    <a href="/Moreproject" className="mt-6 bg-purple-600 text-white py-2 px-20 rounded-full w-full">ดูเพิ่มเติม</a>
</div>

<div className="bg-white bg-opacity-20 shadow-xl rounded-xl p-6 w-72 text-center">
    <h3 className="text-xl font-semibold text-gray-900">ระบบจองคิวร้านชาบู</h3>
    <p className="mt-2 text-gray-500">แอปพลิเคชั่น</p>
    <div className="mt-1">
        <img src="/logoproject_2.png" alt="Description" />
    </div>
    <div className="mt-4 flex space-x-1 justify-center"> 
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            Flutter
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            NodeJS
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            MarisDB
        </button>
    </div>
    <br />
    <br />
    <a href="/Moreproject2" className="mt-6 bg-purple-600 text-white py-2 px-20 rounded-full w-full">ดูเพิ่มเติม</a>
</div>

<div className="bg-white bg-opacity-20 shadow-xl rounded-xl p-6 w-72 text-center">
    <h3 className="text-xl font-semibold text-gray-900">แอปพลิเคชั่นขายอาหารสัตว์เลี้ยง</h3>
    <p className="mt-2 text-gray-500">แอปพลิเคชั่น</p>
    <div className="mt-3">
        <img src="/img_1.jpg" alt="Description" />
    </div>
    <div className="mt-4 flex space-x-1 justify-center"> 
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            React
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            NodeJS
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            MySQL
        </button>
    </div>
    <br />
    <br />
    <a href="/Moreproject" className="mt-6 bg-purple-600 text-white py-2 px-20 rounded-full w-full">ดูเพิ่มเติม</a>
</div>

<div className="bg-white bg-opacity-20 shadow-xl rounded-xl p-6 w-72 text-center">
    <h3 className="text-xl font-semibold text-gray-900">ระบบจองคิวร้านชาบู</h3>
    <p className="mt-2 text-gray-500">เว็บแอปพลิเคชั่น</p>
    <div className="mt-6">
        <img src="/img_1.jpg" alt="Description" />
    </div>
    <div className="mt-4 flex space-x-1 justify-center"> 
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            React
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            NodeJS
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none">
            MySQL
        </button>
    </div>
    <br />
    <br />
    <a href="/Moreproject" className="mt-6 bg-purple-600 text-white py-2 px-20 rounded-full w-full">ดูเพิ่มเติม</a>
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

 
