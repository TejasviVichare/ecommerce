import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black md:py-10 footer'>
        <div className="px-4 md:px-20 pb-10 grid md:grid-cols-3 grid-cols-1">
       
        <div className="footer-links text-left">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/#">Contact</a></li>
           
          </ul>
        </div>
        <div className="footer-links text-left">
          <ul>
          <li><a href="/#">Privacy Policy</a></li>
          <li><a href="/#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-links text-left">
          <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
  
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer