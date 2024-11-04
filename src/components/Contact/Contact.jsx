import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="container">
                <div className="contact__title">
                    <img src="customer-support.png" alt="" />

                    <div className="contact__text">
                        <h2>Be a part of the next big thing</h2>
                        <p>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>
                        <button className='btn'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact