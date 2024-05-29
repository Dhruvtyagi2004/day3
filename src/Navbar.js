import React from 'react'
import { Link } from 'react-router-dom'
 const Navbar = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-evenly', backgroundColor:'royalblue'}} >
      <Link to='/'><p >Home</p></Link>
      <Link to='About'><p >About</p></Link>
      <Link to='Services'><p >Services</p></Link>
        
        
        <p>Contact</p>
        
        
        

    </div>
  )
}
export default Navbar