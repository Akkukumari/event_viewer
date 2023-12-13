import React from 'react'
import "./All.css";

export default function () {
  return (
    <>
    <div className='citybody'>
  
      <h1 id="TastyTreatsHub">Tasty Treats Hub</h1>
   
    <section className="hotDeals" >
      <div className="container">
          <div className='imgbody' >
              <a href="./">
                <img  className='img1'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rtT4fwBojHPYVXOrFGJ_oOYhHr8oUvxh9A&usqp=CAU"/>
                </a>
                <h5 className="imgtext">Kolkata</h5>
          </div>
          <div className='imgbody'>
              <a href="./">
                <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rdDBQOUDkbBkWUV9_qGmRPQ5eS6yBPJpuA&usqp=CAU"/>
                </a>
                <h5 className="imgtext">New Delhi </h5>
          </div>
          <div className='imgbody'>
              <a href="./">
                <img className='img1' src="https://t4.ftcdn.net/jpg/00/47/49/01/360_F_47490128_JLClMTbZyVdxl3OW2m8H4vJHW7hDZ8Jj.jpg"/>
                </a>
                <h5 className="imgtext">Hyderabad </h5>
          </div>
          <div className='imgbody'>
              <a href="./">
                <img className='img1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqHNmfexHRTzdafrtOCtEYXO8YyUnu0vkTg&usqp=CAU"/>
                </a>
                <h5 className="imgtext">Mumbai </h5>
          </div>
          </div>    
    </section>
    </div>
    </>
  )
}
