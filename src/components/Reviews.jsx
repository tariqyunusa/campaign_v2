import React, { useEffect, useState } from 'react'
import "../styles/Reviews.css"
import {Testimonies} from '../Data'
const Reviews = () => {
    const [countIndex, setIndex] = useState(1)
    const [screenSize, setScreenSize] = useState(false)
    const handleMouse = (index) =>{
        setIndex(index)
    }
    const determineScreenSize = () => {
      setScreenSize(true)
    }
    useEffect(() => {},[])

  return (
    <div className='reviews__wrapper' >
      {Testimonies.map((review, index) => (
        <div key={index} style={{backgroundColor: review.color, width: countIndex === index ? '55%' : "auto", transition: ' all 1s cubic-bezier(0.88, -0.05, 0.36, 1)' }} className={`review review-${index+1}`} onMouseEnter={() => handleMouse(index)}>
            {countIndex === index ?  
            <div className='review__quote'>
               <div> <p className='quote'>"{review.quote}"</p></div>
               <div className="review__quote_idetifier">{review.person}</div>
            </div>: <p className='review__cover_paragraph'style={{display: screenSize ? "none" : "block"}} >{review.org}</p>}
        </div>
      ))}
    </div>
  )
}

export default Reviews
