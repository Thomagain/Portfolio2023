"use client"
import React from 'react'
import Image from 'next/image'
import java from '../../../images/java.png'
import js from '../../../images/java-script.png'
import php from '../../../images/php.png'
import reac from '../../../images/react.png'
import htm from '../../../images/html-5.png'
import cs5 from '../../../images/css-3.png'
import tailwin from '../../../images/tailwind.png'
import githu from '../../../images/github.png'
import larave from '../../../images/laravel.png'
import { Slide } from "react-awesome-reveal";



function Experience() {
  return (
    <div className=' bg-transparent' id='experience'>
      {/* logo */}
      <div className="hidden lg:block bg-transparent p-4">
        <div className='flex flex-row justify-center items-center'>
          <Slide direction='left' duration={2000} triggerOnce >
          <Image src={htm} alt="Html" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={cs5} alt="CSS5" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={js} alt="Javascript" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={tailwin} alt="Tailwind" className='w-40 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={php} alt="Php" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          </Slide>
          
          <Slide direction='right' duration={2000} triggerOnce>
          <Image src={reac} alt="React" className='w-24 h-24 bject-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={githu} alt="Github" className='w-24 h-24 bject-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={larave} alt="Laravel" className='w-40 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={java} alt="java" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          </Slide>
          
        </div>
      </div>

      <div className="block lg:hidden bg-transparent p-4">
        <div className='justify-center items-center flex flex-col space-y-4'>
          <Image src={htm} alt="Html" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={cs5} alt="CSS5" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={js} alt="Javascript" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={tailwin} alt="Tailwind" className='w-40 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={php} alt="Php" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={reac} alt="React" className='w-24 h-24 bject-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={githu} alt="Github" className='w-24 h-24 bject-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={larave} alt="Laravel" className='w-40 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
          <Image src={java} alt="java" className='w-24 h-24 object-cover rounded-lg m-4 brightness-75 hover:brightness-125' />
        </div>
      </div>
      {/* logo */}

      <div className='bg-black '>

        <div className="hidden md:block lg:block p-4">
          <Slide direction='up' duration={1000} triggerOnce >
            <div className="w-full sm:w-4/4 p- text-center text-white">
            <div className='text-6xl  justify-center text-center'>
              <h3> My Work Experience</h3>
              <br />
            </div>
            
            </div>

            
          </Slide>

          <Slide direction='right' duration={3000} triggerOnce >
            <div className="flex flex-wrap ">
              <div className="w-full sm:w-1/4 p-10  ">
                <div className="bg-gradient-to-b from-gray-700   via-gray-800 to-emerald-900 text-white h-full shadow-lg p-6 hover:-translate-y-6 hover:duration-300  hover:text-emerald-300 hover:bg-gradient-to-b hover:from-gray-500  hover:via-gray-600 hover:to-gray-700">
                  <h3 className="text-lg text-6x1 font-bold">React Developer(Project Base) at Ticketnation</h3>
                  <p className="text-white">January 2021 - July 2022</p>
                  <br />
                  <ul className="list-disc">
                    <li>Creating of Admin Dashboard for adjustments of Front End</li>
                    <li>Integration of API for functions of the UI</li>
                    <li>Building of reusable codes and components for future use
                      and easy updates</li>
                    <li>Managing tickets on work management application</li>
                  </ul>
                </div>
              </div>

              <div className="w-full sm:w-1/4 p-10 ">
                <div className="bg-gray-500 text-white  h-full shadow-lg p-6 mt-4 hover:text-emerald-300 hover:-translate-y-6 hover:duration-300 hover:bg-gradient-to-b from-gray-700  via-gray-800 to-emerald-900">
                  <h3 className="text-lg text-6x1 font-bold">Freelance Frontend Developer</h3>
                  <p className="text-white">April 2020 - November 2020</p>
                  <br />
                  <ul className="list-disc">
                    <li>Created a dynamic forms for faster evaluating employees and supervisors</li>
                    <li>Created reusable components for forms</li>
                    <li>Integrating API s for submission</li>
                    <li>Design the client side based on the mockup provided</li>
                  </ul>

                </div>
              </div>

              <div className="w-full sm:w-1/4 p-10">
                <div className="bg-gradient-to-b from-gray-700   via-gray-800 to-emerald-900 text-white h-full shadow-lg p-6 hover:-translate-y-6 hover:duration-300 hover:text-emerald-300 hover:bg-gradient-to-b hover:from-gray-500  hover:via-gray-600 hover:to-gray-700">
                  <h3 className="text-lg text-6x1 font-bold">Senior Full Stack Developer at Pahiram.ph Corp</h3>
                  <p className="text-white">October 2017 - April 2020</p>
                  <br />
                  <ul className="list-disc">
                    <li>Design and Develop RESTful API</li>
                    <li>Resolved design issue through root cause analysis and
                      performed cleanups</li>
                    <li>Design proper work flw of the system application</li>
                    <li>Utilize Git for update version</li>
                    <li>Work with outside sources</li>
                  </ul>
                </div>
              </div>

              <div className="w-full sm:w-1/4 p-10">
                <div className="bg-gray-500 text-white  h-full shadow-lg p-6 mt-4 hover:-translate-y-6 hover:duration-300 hover:text-emerald-300 hover:bg-gradient-to-b from-gray-700   via-gray-800 to-emerald-900">
                  <h3 className="text-lg text-6x1 font-bold">Full Stack Developer at iFortress Solutions - BPO</h3>
                  <p className="text-white">July 2017 - October 2017</p>
                  <br />
                  <ul className="list-disc">
                    <li>Develop and Manage Operation of HR management
                      system such as Payroll system, Employee Attendance
                      System</li>
                    <li>Using Native Php, HTML5, CSS, JQuery and Javascript</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slide>

        </div>


        {/* Responsive desktop */}
        <div className="block md:hidden lg:hidden p-4 flex-auto w-full">
          <div className="flex flex-wrap h-full w-full">
            <div className="w-full sm:w-4/4 text-center text-white">
              <h3 className="text-lg  text-6x1 font-semibold">My Work Experience</h3>
              <p className="text-white">Lorem ipsum dolor sit amet</p>
            </div>

            <div className="w-full sm:w-1/4 ">
              <div className="bg-gradient-to-b from-gray-700   via-gray-800 to-emerald-900 text-white h-full shadow-lg p-6 hover:-translate-y-6 hover:duration-300  hover:text-emerald-300 hover:bg-gradient-to-b hover:from-gray-500  hover:via-gray-600 hover:to-gray-700">
                <h3 className="text-lg text-6x1 font-bold">React Developer(Project Base) at Ticketnation</h3>
                <p className="text-white">January 2021 - July 2022</p>
                <br />
                <ul className="list-disc">
                  <li>Creating of Admin Dashboard for adjustments of Front End</li>
                  <li>Integration of API for functions of the UI</li>
                  <li>Building of reusable codes and components for future use
                    and easy updates</li>
                  <li>Managing tickets on work management application</li>
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/4 ">
              <div className="bg-gray-500 text-white  h-full shadow-lg p-6 hover:text-emerald-300 hover:-translate-y-6 hover:duration-300 hover:bg-gradient-to-b from-gray-700  via-gray-800 to-emerald-900">
                <h3 className="text-lg text-6x1 font-bold">Freelance Frontend Developer</h3>
                <p className="text-white">April 2020 - November 2020</p>
                <br />
                <ul className="list-disc">
                  <li>Created a dynamic forms for faster evaluating employees and supervisors</li>
                  <li>Created reusable components for forms</li>
                  <li>Integrating API s for submission</li>
                  <li>Design the client side based on the mockup provided</li>
                </ul>

              </div>
            </div>
            <div className="w-full sm:w-1/4 ">
              <div className="bg-gradient-to-b from-gray-700   via-gray-800 to-emerald-900 text-white h-full shadow-lg p-6 hover:-translate-y-6 hover:duration-300 hover:text-emerald-300 hover:bg-gradient-to-b hover:from-gray-500  hover:via-gray-600 hover:to-gray-700">
                <h3 className="text-lg text-6x1 font-bold">Senior Full Stack Developer at Pahiram.ph Corp</h3>
                <p className="text-white">October 2017 - April 2020</p>
                <br />
                <ul className="list-disc">
                  <li>Design and Develop RESTful API</li>
                  <li>Resolved design issue through root cause analysis and
                    performed cleanups</li>
                  <li>Design proper work flw of the system application</li>
                  <li>Utilize Git for update version</li>
                  <li>Work with outside sources</li>
                </ul>
              </div>
            </div>

            <div className="w-full sm:w-1/4">
              <div className="bg-gray-500 text-white  h-full shadow-lg p-6 hover:-translate-y-6 hover:duration-300 hover:text-emerald-300 hover:bg-gradient-to-b from-gray-700   via-gray-800 to-emerald-900">
                <h3 className="text-lg text-6x1 font-bold">Full Stack Developer at iFortress Solutions - BPO</h3>
                <p className="text-white">July 2017 - October 2017</p>
                <br />
                <ul className="list-disc">
                  <li>Develop and Manage Operation of HR management
                    system such as Payroll system, Employee Attendance
                    System</li>
                  <li>Using Native Php, HTML5, CSS, JQuery and Javascript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Mobile */}


      </div>


    </div>
  )
}

export default Experience