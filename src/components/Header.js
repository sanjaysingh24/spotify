import React from 'react'
import Song from './Song'


export default function Header() {

  return (
    <>
  <div className='liner-bg'>
  <nav  className='navbar flex justify-between '>
    <div>
    <ul className='flex gap-2'>
        <li><button className='prev rounded-full bg-black w-10 h-10'><i class="fa-solid fa-chevron-left text-white"></i></button></li>
        <li><button className='next rounded-full bg-black w-10 h-10'><i class="fa-solid fa-chevron-right text-white"></i></button></li>
     </ul>
    </div>
    <div>
        <ul className='flex gap-3'>
            <li>
           <button className='explore-btn bg-white rounded-full  mt-1 h'>Explore Premium</button>
            </li>
            <li>
            <button className='install-btn bg-black text-white rounded-full px-3 py-1 mt-1'>
            <i class="fa-regular fa-circle-down"></i> Install App
            </button>
             
            </li>
            <li className=' bell rounded-full  bg-black w-10 text-center py-2 cursor-pointer'><i class="fa-regular fa-bell text-white "></i></li>
            <li>
                <button className='rounded-full bg-black h-10'>image</button>
            </li>
        </ul>
    </div>

   </nav>
   
   <div className="container">
        <div className="row">
            <div className="col-lg-12 Afternoon_text">
              <h4 className='text-white text-3xl'><b>Good Afternoon</b></h4>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card-box d-flex cursor-pointer ">
                <div className="card-icon overflow-hidden ">
                 <p><img src="./image/you-know.jpeg" alt="" className='img-fluid card-icon-image ' /></p>

                </div>
                <div className="card-title">
                  <h3 className='text-white '><b>Liked Songs</b></h3>
                </div>
                <div className="play-button">
                    <p className='play-btn'><i class="fa-solid fa-play"></i></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card-box d-flex cursor-pointer  overflow-hidden">
                <div className="card-icon">
                 <p><img src="./image/tamil.jpeg" alt="" className='img-fluid' /></p>

                </div>
                <div className="card-title">
                  <h3 className='text-white '><b>Liked Songs</b></h3>
                </div>
                <div className="play-button">
                    <p className='play-btn'><i class="fa-solid fa-play"></i></p>
                </div>
              </div>
                
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card-box d-flex cursor-pointer ">
                <div className="card-icon">
                 <p><i class="fa-solid fa-heart text-white"></i></p>

                </div>
                <div className="card-title">
                  <h3 className='text-white '><b>Liked Songs</b></h3>
                </div>
                <div className="play-button">
                    <p className='play-btn'><i class="fa-solid fa-play"></i></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card-box d-flex cursor-pointer ">
                <div className="card-icon">
                 <p><i class="fa-solid fa-heart text-white"></i></p>

                </div>
                <div className="card-title">
                  <h3 className='text-white '><b>Liked Songs</b></h3>
                </div>
                <div className="play-button">
                    <p className='play-btn'><i class="fa-solid fa-play"></i></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card-box d-flex cursor-pointer ">
                <div className="card-icon">
                 <p><i class="fa-solid fa-heart text-white"></i></p>

                </div>
                <div className="card-title">
                  <h3 className='text-white '><b>Liked Songs</b></h3>
                </div>
                <div className="play-button">
                    <p className='play-btn'><i class="fa-solid fa-play"></i></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
            <div className="card-box d-flex cursor-pointer ">
                <div className="card-icon">
                 <p><i class="fa-solid fa-heart text-white"></i></p>

                </div>
                <div className="card-title">
                  <h3 className='text-white '><b>Liked Songs</b></h3>
                </div>
                <div className="play-button">
                    <p className='play-btn'><i class="fa-solid fa-play"></i></p>
                </div>
              </div>
            </div>
            <Song img ="./image/first.jpeg" title = "Daily mix 1" singer ="Darshan Raval, Tanishk
                  Bagchi,Aditya Yadav and...."></Song>
        </div>
    </div> 
  </div>
    </>
  )
}
