import React from 'react'
import Header from './Header'
import Sidenav from './Sidenav'
import Playbar from './Playbar'


export default function Navbar() {


  return (
   <>
 <div className="container">
    <div className="row ">
        <div className="col-lg-3 pe-0 ">
     <Sidenav></Sidenav>
        </div>
        <div className="col-lg-9 main-navbar">
       
            <Header></Header>
            
        </div>
    
        <Playbar></Playbar>
     
     
      </div>
    </div>

   </>
  )
}
