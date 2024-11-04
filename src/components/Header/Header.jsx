import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <div className='header'>
            <div className="container">
                <nav className="nav">
                    <h4>Digital Agency</h4>

                    <img src="menu.svg" alt="menu" className='menu' />

                    <div className='nav-links'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>

                <div className="header__title">


                    <div className="header__title-text">
                        <h1>Building digital products, brands & Experience</h1>
                        <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                        <button className='btn'>Contact us</button>
                    </div>

                    <img src="business-people-discussing-business-idea.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header