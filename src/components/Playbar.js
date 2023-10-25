import React from 'react'

export default function Playbar() {
  return (
    <section className='play_bar'>
        <div className="container">
            <div className="row ">
              <div className="col-lg-4 ">
                 <div className="main d-flex align-items-center gap-3">
                
                    <img src="./image/first.jpeg" alt="" className='img-fluid song_image  rounded-2' />
                 
                  <div className="about_song ">
                    <div className="song_name ">
                      <p className='song_info '>Shrma ji saamne wale</p>
                      <p className='artist_name '>Rohit sharma</p>
                    </div>
                  </div>

                  <p> <i className='material-icons favorite '>favorite</i> </p>
                 </div>

              </div>
              <div className="col-lg-4">
                  <div className="playbar_icons gap-3 d-flex">
                  <p className='shuffle'><i className='material-icons shuffle'>shuffle</i></p>
                 <p className='prev'><i className='material-icons skip_previous'>skip_previous</i></p>
                 <p className='play'><i className='material-icons play'>play_arrow</i></p>
                 <p className='next'><i className='material-icons skip_next'>skip_next</i></p>
                 <p className='repeat'><i className='material-icons repeat'>repeat</i></p>
                  </div>
                  <div className="seekbar">
                    
                  </div>
              </div>
              <div className="col-lg-4">

              </div>
            </div>
        </div>
    </section>
  )
}
