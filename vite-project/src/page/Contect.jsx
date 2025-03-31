import React from 'react';
import Nav from './Nav';
import Das from './Disboard';
import { motion } from 'framer-motion'
function Contect() {
  return (
    <motion.div // ใช้ motion.div สำหรับใส่ animation
          className="bg-white"
          initial={{ opacity: 0 }}   // ตั้งค่าเริ่มต้นที่ opacity 0 (ซ่อน)
          animate={{ opacity: 1 }}   // ตั้งค่าให้ opacity เป็น 1 เมื่อหน้าแสดงผล
          exit={{ opacity: 0 }}      // ตั้งค่าให้ opacity กลับเป็น 0 เมื่อออกจากหน้า
          transition={{ duration: 0.5 }} // ตั้งเวลา transition (0.5 วินาที)
        >
          <Nav />
         <div className="relative isolate overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-16 sm:py-24 lg:py-32"> 
         <div className=" min-h-screen py-16 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-semibold text-white mb-4">ช่องทางการติดต่อ</h2>
            
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600">Facebook</h3>
              <p className="text-blue-600">Thiraphat Thongkruea</p>
              <p className="text-black">Link:https://www.facebook.com/thiraphat.thongkhruea/</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600">Email</h3>
              <p className="text-blue-600">12758thiraphat@gmail.com</p>
              
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600">Github</h3>
              <p className="text-blue-600">URL : https://github.com/thairaphat</p>
              
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600">Telefonnummer</h3>
              <p className="text-blue-600">096-740-9426</p>
            </div>
          </div>
        </div>
      </div>
    </div>
         </div>
        </motion.div>  
  )
}

export default Contect