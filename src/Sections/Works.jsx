import React, { useState } from 'react'
import "../styles/Works.css"
import { Slider } from '../Data'
import { useAppContext } from '../AppContext'
import exploreImg from "../assets/arrow-up-right.png"
import Cursor from '../components/Cursor'

const Works = () => {
    const [index, setIndex] = useState(0)
    const {gsapInstance, splitWords} = useAppContext()
    const [mousePosition, setMousePosition] = useState({left: 0, top:0})
    const mouseMove = (e) => {
     const {clientX: left, clientY: top} = e
     setMousePosition({left, top})
    //  console.log(left);
     
    }
  return (
    <section className='work__section' onMouseMove={mouseMove}>
      <Cursor x={mousePosition.left} y={mousePosition.top}/>
        <div className="close first__work_close"></div>
        <div className="close second__work_close"></div>
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
              <a className='visit___site_work__link'>Visit Site</a>
              <div className="link__explore_wrapper">
              <img src={exploreImg} alt="link" className='link__explore' />

              </div>
              </div>
              <div className="work__explore__counter">
                <p className='work__explore__counter_count'>{index + 1}/{Slider.length}</p>
              </div>
            </div>
            
            </div>
            
      </div>
    </section>
  )
}

export default Works
