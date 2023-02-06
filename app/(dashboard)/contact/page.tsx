import React from 'react'

function contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-8 px-4 text-white" id='contact'>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-xl font-bold">Contact Me</h2>
        <p className="mt-4">
          792 Congressional Avenue Extension, Corner Luzon Avenue Quezon City
        </p>
        <p className="mt-2">
          CellPhone: (+63) 995-2034-623
        </p>
        <p className="mt-2">
          Email: LansthomasN.tinio@gmail.com
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            className="p-2 bg-gray-800 rounded-lg text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-gray-800 rounded-lg text-white mt-4"
          />
          <textarea
            placeholder="Message"
            className="p-2 bg-gray-800 rounded-lg text-white mt-4"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default contact