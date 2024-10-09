import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
            <h2>Contact Form</h2>
             
             <div>
              <form method='POST' action='https://formspree.io/f/mzzpbgzb' >
               <input type='text' name="username" placeholder='Username'/> <br />
               <input type='password' name="password" placeholder='Username'/> <br />
               <button type='submit'>Submit</button>
               </form>
             </div>
        </div>
    </div>
  )
}

export default Contact