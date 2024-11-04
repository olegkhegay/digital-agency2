import React from 'react'
import './Comments.css'

const Comments = () => {
  return (
    <>
        <div className="comments">
            <div className="container">
                <div className="comments__title">
                    <h4>TESTIMONIALS</h4>
                    <h2>Read What Other have to Say</h2>

                    <div className="comments__box">
                        <div className="box__card">
                            <img src="man1.png" alt="" />
                            <h3>Andrew Rathore</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                        <div className="box__card">
                            <img src="man2.png" alt="" />
                            <h3>Vera Duncan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                        <div className="box__card">
                            <img src="man3.png" alt="" />
                            <h3>Mark Smith</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Comments