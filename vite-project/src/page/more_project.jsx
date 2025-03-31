import React from 'react';
import Nav from './Nav';
import Das from './Disboard';
import { motion } from 'framer-motion'
export default function more_project()  {
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
      <div className="">
        
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-white">ตัวอย่าง</a>
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                   
                  </svg>
                </div>
              </li>
              <li>
                
              </li>
  
              
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img src="/Project_w2.jpg" alt="Two each of gray, white, and black shirts laying flat." className="hidden size-full rounded-lg object-cover lg:block" />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img src="/Project_w3.jpg" alt="Model wearing plain black basic tee." className="aspect-3/2 w-full rounded-lg object-cover" />
            <img src="/Project_w4.jpg" alt="Model wearing plain gray basic tee." className="aspect-3/2 w-full rounded-lg object-cover" />
          </div>
          
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img src="/Project_w5.jpg" alt="Model wearing plain black basic tee." className="aspect-3/2 w-full rounded-lg object-cover" />
            <img src="/Project_w1.jpg" alt="Model wearing plain gray basic tee." className="aspect-3/2 w-full rounded-lg object-cover" />
          </div>
          
        </div>
  
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">รายละเอียดงาน</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-white">freamwork&Tool</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center ">
                  <div className="flex items-center">
                    {/* Stars */}
                    
                    {/* More stars */}
                    {/* Repeat this for other stars */}
                  </div>
                  <img src="/react_logo.png" alt="Description" />
                  <img src="/node_logo.png" alt="Description" />
                  <img src="/mysql_logo.png" alt="Description" />
                 
                </div>
              </div>
  
             
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-white">โดยโปรเจคนี้เป็นการนำปัญหาของการรอคิวของร้านชาบูที่อยู๋ในช่วงที่กำลังบูมใหม่ๆจึงเกิดปัญหาการรอคิวการมาจองที่ร้านจึงทำให้คิดริเริ่มทำเว็บแอปพลิเคชั่นสำหรับจตองคิวร้านชาบูนี้ขึ้นมา</p>
                </div>
              </div>
  
              <div className="mt-10">
                <h3 className="text-sm font-medium text-white">การทำงานของระบบฝั่งหน้าบ้าน</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400"><span className="text-white">สามารถดูการอัปเดตรายการอาหารของแต่ละวันได้</span></li>
                    <li className="text-gray-400"><span className="text-white">ระบบการจองคิว</span></li>
                    <li className="text-gray-400"><span className="text-white">สามารถเลือกเวลาที่ต้องการเข้ามาจองโดยเวลาจะมีการแจ้งว่าเหลือกี่ที่แบบเรียลทามป์</span></li>
                    <li className="text-gray-400"><span className="text-white">สามารถเลือกโต๊ะได้</span></li>
                    <li className="text-gray-400"><span className="text-white">ระบบแจ้งเตือนเมื่อใกล้ถึงคิว</span></li>
                  </ul>
                </div>
                <br />
                <h3 className="text-sm font-medium text-white">การทำงานของระบบหลังบ้าน</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400"><span className="text-white">การแจ้งเตือนเมื่อมีการจอง</span></li>
                    <li className="text-gray-400"><span className="text-white">เก็บข้อมูลของการจองดพิ่อมาทำสถิติได้</span></li>
                    <li className="text-gray-400"><span className="text-white">การเพิ่มสินค้าเพื่อให้ไปแสดงหน้าเว็บ</span></li>
                    <li className="text-gray-400"><span className="text-white">สามารถอัปเดตโต๊ะที่ว่างหรือที่มีการจองแล้ว</span></li>
                  </ul>
                </div>
              </div>
  
              <div className="mt-10">
                
                <div className="mt-4 space-y-6">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>  
  );
};

