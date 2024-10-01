import React, { useState } from 'react'
import "../styles/Works.css"
import { Slider } from '../Data'
import { useAppContext } from '../AppContext'

const Works = () => {
    const [index, setIndex] = useState(0)
    const {gsapInstance, splitWords} = useAppContext()
  return (
    <section className='work__section'>
       <img src={Slider[index].image} alt={Slider[index].name} className='work__background' />
      <div className="work__wrapper">
            <div className='redundant'>
            <div className="work___info">
               <h1 className='work___info_header'>{splitWords(Slider[index].name)}</h1>
                <div className='work__roles'>
                    {Slider[index].works.map((work, index) => (
                       <p key={index} className='work___roles_paragraph'>{work}</p>
                    ))}
                </div>
            </div>
            <div className="work___explore">
              <div className="visit___site_work">
              <h1 className='visit___site_work__link'>{splitWords("Visit Site")}</h1>

              </div>
            </div>
            
            </div>
            
      </div>
    </section>
  )
}

export default Works
