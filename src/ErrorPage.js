import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-center w-full px-20 my-14'>
      <div>
         <h2 className='my-2 text-6xl'>404</h2>
         <h3 className='my-2 text-xl'>Page Not Found</h3>
         <p className='my-2'>Oops ! The Page you are looking for does not exist. It might have been moved or delete.</p>
        <NavLink  to="/">
          <button  className='bg-blue-900 p-2 text-white mt-6'>Go Back To Home Page</button>
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage