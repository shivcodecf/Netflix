import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import st1 from '../../assets/st1.jpg'
import st2 from '../../assets/st2.jpg'
import st3 from '../../assets/st3.jpeg'
import st4 from '../../assets/st4.jpg'
import st5 from '../../assets/st5.jpg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return ( 
    <>
    <div className='home'>
      <Navbar/> 
      <div className="hero">
        <img src={st5} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='caption-img'/> 
          <p>Series creators Matt and Ross Duffer previously told Tudum that they wrote a 25-page mythology document for Netflix back in Season 1 that delves into the mythology and lore of the Upside Down. “We were like, ‘We know what’s going on in the Upside Down, more or less, but we want it to be unknowable. We want it to be mysterious,’ ” Matt Duffer explained. “But they were like, ‘Yeah, but can you write it down?’ And so we wrote it all down.”</p> 
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button> 
            <button className='btn btn2 dark-btn'><img src={info_icon} alt="" style={{marginLeft:"5px"}} />More Info</button>
          </div> 
         
          <div className="image-slider-container">
  <div className="image-slider">
  <TitleCards/>
    <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
    <TitleCards title={"Only on Nertflix"}  category={"popular"}/>
    <TitleCards title={"Upcoming"} category={"upcoming"}/>
    <TitleCards title={"Top Pics for you"}  category={"now_playing"}/>
  </div>
</div>

        </div>

      </div> 
     
      
    </div>  
    <Footer />
   
    </>
    
  )
}

export default Home                                                   
