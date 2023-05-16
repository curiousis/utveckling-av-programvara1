
import { motion,useScroll,useTransform } from "framer-motion"
import React from "react"

export default function Home() {
  const {scrollYProgress} = useScroll()
  return (
    <main
    >
      {//<motion.div style={{scaleX:scrollYProgress,background: 'red',position:'fixed',top:0,left:0,right:0,height:'20px',width:'100vw'}} className=""></motion.div>
       // <motion.div style={{}} initial={{x: '-100vw'}} animate={{x:0}} transition={{duration:1}} className="h-48 w-48 bg-amber-700 shadow-sm rounded-sm"></motion.div>
       // <motion.div initial={{x: '-100vw'}} animate={{x:0}} transition={{duration:1}} className="h-48 w-48 bg-lime-700 shadow-sm rounded-full"></motion.div>
      }
      <div className="flex flex-col min-h-screen">
      <div className="bg-gray-700 flex gap-5 p-10 items-center justify-end text-white py-4">
        <motion.div   whileTap={{ scale: 1.1 }} className="bg-gray-500 h-8 w-24"></motion.div>
        <motion.div  whileTap={{ scale: 1.1 }} className="bg-gray-500 h-8 w-24"></motion.div>
        <motion.div  whileTap={{ scale: 1.1 }} className="bg-gray-500 h-8 w-24"></motion.div>
        <motion.div  whileTap={{ scale: 1.1 }} className="bg-gray-500 h-8 w-24"></motion.div>
        <motion.div  whileTap={{ scale: 1.1 }} className="bg-gray-500 h-8 w-24"></motion.div>
      </div>
      <div className="flex flex-1">
        <div className="w-1/6 bg-gray-600 text-white">
          <div className="p-4">
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
            <div className="bg-gray-700 h-8 mb-4"></div>
          </div>
        </div>
        <div className="w-5/6 ">
          <div className="bg-gray-300 px-5 flex w-full m-auto justify-between center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path fill-rule="evenodd" d="M10.707 3.293a1 1 0 010 1.414L6.414 9H16a1 1 0 010 2H6.414l4.293 4.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <motion.div  animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }} className="bg-gray-400 w-1/2 mt-8 mb-20 h-80">
            </motion.div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path fill-rule="evenodd" d="M9.293 16.707a1 1 0 01-1.414-1.414L12.586 10H4a1 1 0 010-2h8.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6z" clip-rule="evenodd" />
            </svg>

          </div>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}                  
          className="flex flex-wrap gap-2 justify-center items-center">
          {Array.from(Array(40)).map((_, index) => (
              <React.Fragment key={index}>
                <div className='flex flex-col mb-10 shadow'>
                    <motion.div whileHover={{ scale: 1.05 }} className={`bg-gray-400 mb-4 mt-10 h-40 w-60 m-2 ${index % 6 === 5 ? 'mb-2' : ''}`}></motion.div>
                    <motion.div className='flex w-full px-4 justify-between'     >
                        <div className='h-12 w-12 rounded-full bg-gray-400'></div>
                        <div className='h-12 w-2/3 bg-gray-400'></div>
                    </motion.div>
                    
                </div>
                {index % 6 === 5 && <div className="w-full border-b-8 border-gray-700"></div>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </main>
  )
}
