"use client"
import React from 'react'
import Image from 'next/image'
import thom from '../../../images/Thom.png'

import { Slide } from "react-awesome-reveal";


function About() {
  return (


    <div id='about'>

      <div className="flex flex-col md:flex-row h-4/5 bg-black w-full ">
        <Slide direction="left" triggerOnce duration={2000} className="md:w-1/2 p-4">
          <div className=" rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <Image src={thom} alt="Thom" className=" object-cover relative" />
            </div>
          </div>
        </Slide>
        <Slide cascade direction="up" triggerOnce className="w-full md:w-1/2 p-4 ">
          <div className=" rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className=" flex flex-wrap object-cover relative text-start text-xl text-white font-bold justify-center mt-24">
                <div className='text-3xl text-emerald-500 justify-center text-center'>
                  <h1> ABOUT PERSONAL</h1>
                  <br />
                </div>
                <div className='text-6xl  justify-center text-center'>
                  <h3> Hello, Im Lans Thomas <span className='text-emerald-500'>Tinio</span></h3>
                  <br />
                </div>

                <div className='italic font-light text-2x1 p-4'>
                  <p >After a year with freelancing, I sought more growth as a developer.</p>
                  <p > I focused with the latest technology stack of ReactJS,</p>
                  <p > which is well known and much streamlined language.</p>
                  <p > My responsibilities were integrating of API for the functions of UI.</p>
                  <p > Building reusable codes and components for future use and easy updates.</p>
                  <p > Currently, the website up and running.</p>
                  <p > Its on maintenance phase, and</p>
                  <p > I saw within myself I want to learn and expand more.</p>
                </div>

              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 mx-4"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>

            </div>
          </div>
        </Slide>

      </div>

      
    </div>
  )
}

export default About