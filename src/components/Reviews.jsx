import React, { useState } from 'react'
import "../styles/Reviews.css"
import {Testimonies} from '../Data'
const Reviews = () => {
    const [countIndex, setIndex] = useState(1)
    const handleMouse = (index) =>{
        setIndex(index)
    }
  return (
    <div className='reviews__wrapper'>
      {Testimonies.map((review, index) => (
        <div key={index} style={{backgroundColor: review.color, width: countIndex === index ? '55%' : "auto", transition: 'width 2s ease-in-out' }} className={`review review-${index+1}`} onMouseEnter={() => handleMouse(index)}>
            {countIndex === index ?  
            <div className='review__quote'>
               <div> <p className='quote'>"{review.quote}"</p></div>
               <div className="review__quote_idetifier">{review.person}</div>
            </div>: <p className='review__cover_paragraph'>{review.org}</p>}
        </div>
      ))}
    </div>
  )
}

export default Reviews
