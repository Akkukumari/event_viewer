import React from 'react'
import '../Components/Home/All.css';
import Carousel1 from './Carousel1';
import Cities from '../Components/Home/Cities';
import Sec4Days  from '../Components/Home/Sec4Days';
import Footer from '../Components/Home/Footer';
import Sec5 from '../Components/Home/Sec5';

export default function Home() {
  return (
    <>
       <div className='home'>
        <h1 className='firsttext'> Divi Conference</h1>
        <h1 className='secondtext'>Summer 2021</h1>

        <div className='secpart'>
        <Carousel1 />
        <div className='righsecpart'>
          {/* <img src='https://e1.pxfuel.com/desktop-wallpaper/1008/541/desktop-wallpaper-dark-to-compliment-your-new-iphone-7-full-black-iphone.jpg'></img>  */}
          <h1 className='firsttext1'>Earlybird Registration Now Open</h1>
          <h5 className='sectext2'> Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum.</h5>
        </div>
        </div>

        <Cities/>
        <Sec5/>
        <Sec4Days/>
        <Footer/>
        </div>  
    </>
  )
}
