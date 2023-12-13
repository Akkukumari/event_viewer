import React from 'react'
import "./Sec5.css";
// import { Component } from 'preact';

export default function Section1() {
  return (
    <div className='container'>
        <div className='container-1'>
        <div className='box box-1'>
            <div className='row-1'>July 12</div>
            <div className='row-2'>Fri</div>
            <div className='row-3'>8 Speakers</div>
            <div className='row-4'>2 WorkShops</div>
            <div className='row-5'><a href="#">View Schedule</a></div>
        </div>
        <div className='box box-2'>
            <div className='row-1'>July 13</div>
            <div className='row-2'>Sat</div>
            <div className='row-3'>16 Speakers</div>
            <div className='row-4'>3 Workshops</div>
            <div className='row-5'><a href="#">View Schedule</a></div>
        </div>
        <div className='box box-3'>
            <div className='row-1'>July 14</div>
            <div className='row-2'>Sun</div>
            <div className='row-3'>2 Speakers</div>
            <div className='row-4'>5 WorkShops</div>
            <div className='row-5'><a href="#">View Schedule</a></div>
        </div>
    </div>
    </div>
  )
}