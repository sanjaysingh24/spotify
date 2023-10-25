import React from 'react'

export default function Song() {
  return (
    <>
     <div className="container fav-songs">
      <div className="row">
        <div className="col-lg-12 d-flex justify-between">
          <h2 className='text-white text-3xl hover:underline cursor-pointer mt-4'><b>Made for sanju</b></h2>
          <p className='text-white mt-4 hover:underline cursor-pointer'>show all</p>
        </div>
        <div className="col-lg-3 mt-4">
           <div className="song-card cursor-pointer">
            <div className="card-img">
               <img src="./image/first.jpeg" alt=""  className='img-fluid rounded-md' />
               <div className="song-button">
                    <p className='song-btn'><i class="fa-solid fa-play"></i></p>
                </div>
            </div>
            <div className="song-title text-white mt-3">
                <h2><b>Daily Mix 1</b></h2>
            </div>
            <div className="singer-name text-white ">
                <p className=''>Darshan Raval, Tanishk
                  Bagchi,Aditya Yadav and....
                </p>
            </div>
           </div>
        </div>
        <div className="col-lg-3 mt-4">
        <div className="song-card cursor-pointer">
            <div className="card-img">
               <img src="./image/second.jpeg" alt=""  className='img-fluid rounded-md' />
               <div className="song-button">
                    <p className='song-btn'><i class="fa-solid fa-play"></i></p>
                </div>
            </div>
            <div className="song-title text-white mt-3">
                <h2><b>Daily Mix 3</b></h2>
            </div>
            <div className="singer-name text-white ">
                <p className=''>Prem Dhillon, Karan Randhawa, Mankirt Aulakh 
                </p>
            </div>
           </div>
        </div>
        <div className="col-lg-3 mt-4">
        <div className="song-card cursor-pointer">
            <div className="card-img">
               <img src="./image/third.jpeg" alt=""  className='img-fluid rounded-md' />
               <div className="song-button">
                    <p className='song-btn'><i class="fa-solid fa-play"></i></p>
                </div>
            </div>
            <div className="song-title text-white mt-3">
                <h2><b>Daily Mix 4</b></h2>
            </div>
            <div className="singer-name text-white ">
                <p className=''>Badshah, Mitraz, Darshan Raval and more
                </p>
            </div>
           </div>
        </div>
        <div className="col-lg-3 mt-4">
        <div className="song-card cursor-pointer">
            <div className="card-img">
               <img src="./image/fourth.jpeg" alt=""  className='img-fluid rounded-md' />
               <div className="song-button">
                    <p className='song-btn'><i class="fa-solid fa-play"></i></p>
                </div>
            </div>
            <div className="song-title text-white mt-3">
                <h2><b>Daily Mix 5</b></h2>
            </div>
            <div className="singer-name text-white ">
                <p className=''>AP Dhillon, Shubh, Jass Manak and more
                </p>
            </div>
           </div>
        </div>
      </div>
     </div>
    </>
  )
}
