import React from 'react'
import '../styles/Testimonials.css'
import Reviews from '../components/Reviews'

const Testimonials = () => {
    return(
        <div className='testimonials__wrapper'>
            <div className="close testimonial__close"></div>
            <div className="testimonials__headline">
                <p className='testimonials__headline_paragraph'>What the streets says about us</p>
            </div>
            <div className="testimonials__main_content">
              <Reviews />
            </div>
        </div>
    )
}

export default Testimonials