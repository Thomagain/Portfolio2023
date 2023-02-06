"use client"
import React from 'react'
import Image from 'next/image'
import thom from '../../images/Thom.png'
import Fade from 'react-awesome-reveal'



function dashboard() {
  return (

    <div >
      <Fade cascade duration={1000} triggerOnce>
        <div className="flex md:flex items-center justify-between bg-gradient-to-r from-black  via-gray-800 to-emerald-900 max-h-fit">
          <div className="md:w-1/2 text-right">
            <div className=" text-xl text-white text-start font-bold relative items-center justify-start px-8">
              <h1 className='items-center justify-end text-6xl'> Software Developer</h1>
              <br />

              <p>I am Full Stack Developer with over five years knowledgeable in</p>
              <p> many diffrent front end and back end languages, responsive</p>
              <p>frameworks, databases, and code practices.</p>
            </div>
          </div>

          <div className="md:w-1/2  object-cover relative">
            <Image src={thom} alt="Thom" className="rounded-full" />
          </div>
        </div>

      </Fade>


    </div>


  )
}

export default dashboard