import React from 'react'
import {Link } from 'react-router-dom'
 
function Header() {
  return (
   <>
   <div className="nav flex justify-between">
     
      <div className="logo ml-8">
        CodeBunny
      </div>
      
       <ul className=' flex gap-4 mr-8'>
          <Link to='/'>
          <li>
            home
          </li>
          </Link>

          <Link to='/news'>
          <li>
            News
          </li>
          </Link>
  
          <Link to='/ccpage'>
          <li>
           Componets
          </li>
          </Link>
          
        </ul>

         <div className="flex gap-3 mr-2">
          <div className="login">
            <Link to = '/login'>
            Login
            </Link>
          </div>
          <div className="profile">
          
        
         
              <Link to='/profilepage'>
              Profile
              </Link>
            
          

          </div>
         </div>
       </div>
      
   </>
  )
}

export default Header