import React from 'react'
import { useState } from 'react';

export default function Sidenav() {
const[color,setColor] = useState(" ");

    let ss = {
    backgroundColor:"#121212",
    marginTop: 10,
    borderRadius:"10px 10px 10px 10px",
    padding:"10px 20px 10px 20px"
    
    
 }
 let sss = {
    backgroundColor:"#121212",
    marginTop: 10,
    borderRadius:"10px 10px 10px 10px",
    padding:"10px 20px 86px 20px"
 }
 const play ={
    color: "#2A2A2A",
    padding:"5px 12px",
    fontSize:"13px",
    fontWeight:"600"
 }
 let p ={
    color:"#a7a7a7",
    fontSize:"14px"
 }
//  const home =()=>{
//   setColor("blue");
//  }
    return (
    <section  >
        <div className="two_button" style={ss}>
        
            <div className="first_btn text-white pt-2">
            <p className='d-flex'> <span><svg fill ="#a7a7a7" role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq home-active-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path></svg></span><span className='ps-3' style={p}><b>Home</b></span></p>
            </div>
            <div className="first_btn text-white mt-3 pb-3">
             <p className='d-flex'><svg role="img" fill ="#a7a7a7"height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq search-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg><span className='ps-3' style={p}><b>Search</b></span></p>
            </div>
        </div>

       <div style={sss}>
       <div className="library d-flex justify-between align-items-center " >
            <div className="library_icon d-flex">
            <svg  fill ="#a7a7a7"role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
            <div className="libText text-white">
                <h4 className='ps-3 mt-1'><b style={p}>Your Library</b></h4>
            </div>
            </div>

            <div className="two_icons d-flex gap-3">
                <div className="first_icon">
                <svg fill='#fff' role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
                </div>
                <div className="second_icon">
                <svg fill='#fff' role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 leya-dW"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg>
                </div>
            </div>
            
  

        </div>

        <div className="playlist-button mt-4">
            <button style={play} className='btn btn-sm btn-dark rounded-full text-white'>Playlists</button>
        </div>

        <div className="creator mt-3 d-flex justify-between align-items-center">
            <div className="search_icon">
            <svg fill='#f9f9f9' role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 haNxPq CIVozJ8XNPJ60uMN23Yg" viewBox="0 0 16 16" data-encore-id="icon"><path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path></svg>
            </div>
            <div className="creator_icon d-flex align-items-center gap-2">
                <div className="Creator_content">
  <p style={p}>Creator</p>
                </div>
                <div className="icon">
                <svg fill='#f9f9f9' role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 leya-dW"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
                </div>
            </div>
        </div>

        <div role='button' className="song_list d-flex align-items-center mt-4">
            <div className="song_img w-25">
                <img src="./image/like.png" alt=""  className ="img-fluid w-75 rounded-1"/>
            </div>
            <div className="song_title">
                <h3 className='text-white'>Liked Songs</h3>
               <div className='d-flex align-items-center gap-2'>
               <p ><span><svg style={{width:'13px'}} fill='#117a37' data-encore-id="icon" role="img" aria-hidden="false" class="Svg-sc-ytk21e-0 kAkpoF G7aCptcOZswI1fN6dGkO" viewBox="0 0 16 16"><title>Pinned</title><path d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path></svg></span></p>
              <p style={p}>Playlist • 28 songs </p>
               </div>
                   
           
            </div>
        </div>
        <div role='button' className="song_list d-flex align-items-center mt-4">
            <div className="song_img w-25">
                <img src="./image/song_img-2.jpg" alt=""  className ="img-fluid w-75 rounded-1"/>
            </div>
            <div className="song_title">
                <h3 className='text-white'>Viplav + Vedant + sanju</h3>
               <div className='d-flex align-items-center gap-2'>
               <p ><span><svg style={{width:'13px'}} fill='#117a37' data-encore-id="icon" role="img" aria-hidden="false" class="Svg-sc-ytk21e-0 kAkpoF G7aCptcOZswI1fN6dGkO" viewBox="0 0 16 16"><title>Pinned</title><path d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path></svg></span></p>
              <p style={p}>Playlist • Spotify </p>
               </div>
                   
           
            </div>
        </div>
        <div role='button' className="song_list d-flex align-items-center mt-4">
            <div className="song_img w-25">
                <img src="./image/song_3.jpg" alt=""  className ="img-fluid w-75 rounded-1"/>
            </div>
            <div className="song_title">
                <h3 className='text-white'>Rudra + sanju</h3>
               <div className='d-flex align-items-center gap-2'>
               <p ><span><svg style={{width:'13px'}} fill='#117a37' data-encore-id="icon" role="img" aria-hidden="false" class="Svg-sc-ytk21e-0 kAkpoF G7aCptcOZswI1fN6dGkO" viewBox="0 0 16 16"><title>Pinned</title><path d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z"></path></svg></span></p>
              <p style={p}>Playlist • Spotify </p>
               </div>
                   
           
            </div>
        </div>
       </div>
    </section>
  )
}
