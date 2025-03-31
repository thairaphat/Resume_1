import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion';
import Card_project from './card_project';
export default function Project_page() {
  
  return (
    <motion.div
      className="bg-gradient-to-r from-black via-gray-900 to-black"
      initial={{ opacity: 0 }}  // เริ่มต้นที่ opacity 0
      animate={{ opacity: 1 }}  // สร้างการเคลื่อนไหว opacity ให้เป็น 1
      exit={{ opacity: 0 }}     // เมื่อออกจากหน้านี้ให้ opacity กลับเป็น 0
      transition={{ duration: 0.5 }}  // ตั้งเวลาของ transition
    >
    <div>
        <Nav/>
      <Card_project/>
    </div>
    </motion.div>
  )
}

