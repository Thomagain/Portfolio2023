"use client"
import React, { useState } from 'react'

function Navigation() {
      const [isOpen, setIsOpen] = useState(false);
  return (

    <header className="bg-slate-900 border-b py-6 px-8 relative">
      <nav className="relative flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-blueGray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="/">
              Portfolio
            </a>
            <button className="lg:hidden cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent bloc outline-none focus:outline-none" type="button" onClick={() => setIsOpen(!isOpen)}>
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
            
          </div>
          <div className="hidden lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#experience">
                  Expriences
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {isOpen && (
          <div className="lg:flex flex-grow items-center">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#experience">
                  Expriences
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          )}
        </div>
      </nav>
    </header>



  )
}

export default Navigation