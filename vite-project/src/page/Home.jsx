import React from 'react';
import Nav from './Nav';
import Das from './Disboard';
import { motion } from 'framer-motion'; // ใช้การ import motion จาก framer-motion

export default function Home() {
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
        {/* พื้นหลังที่เบลอ (Blurred background) */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 transition-all duration-500"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#4B0082] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>

        {/* คอนเทนต์ส่วนอื่นๆ */}
        <Das />

        {/* พื้นหลังที่เบลออีกส่วนหนึ่ง */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] transition-all duration-500"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#000000] to-[#4B0082] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
      </div>
    </motion.div>  
  )
}
