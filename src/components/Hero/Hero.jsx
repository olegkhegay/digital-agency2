import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <div className="hero">
            <div className="container">
                <div className="hero__title">
                    <div className="title__box title__box1">

                        <img className='box__img' src="designer-team-working-on-creative-design.png" alt="" />

                        <div className="box__text">
                            <h1>Branding & Design system</h1>
                            <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                            <img className='arrow' src="Arrow.png" alt="" />
                        </div>
                    </div>
                    <div className="title__box title__box2">

                        <div className="box__text">
                            <h1>Custome & Plugin Development</h1>
                            <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                            <img className='arrow' src="Arrow.png" alt="" />
                        </div>
                        
                        <img className='box__img' src="businessman-analyzing-data.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero