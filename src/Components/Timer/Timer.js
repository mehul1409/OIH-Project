import React ,{useState,useRef,useEffect} from 'react'
import "./Timer.css"
export default function Timer() {


  useEffect(()=>{
    startTimer();
    return()=>{
      clearInterval(interval.current);
    }
  })

  return (
    <div className='timer-container'>
       
    </div>
  )
}
