import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="image">
        <img src="./logo192.png" alt="" width={50} />
      </div>
    <div className='icons'>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact Us</a>
     
    </div>
   <div className="btn">
   <button className='log'>Log In</button>
    <button className='log'>Log Out</button>
   </div>
    </div>
  )
}

export default Navbar

