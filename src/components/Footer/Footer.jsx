import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__box">
                        <b>Digital Agency</b>
                        <p>Building digital products, 
                        brands & experience</p>
                    </div>
                    <div className="footer__box">
                        <b>Resources</b>
                        <p>Guides</p>
                        <p>Blog</p>
                        <p>Cuistomer Stories</p>
                        <p>Glossery</p>
                    </div>
                    <div className="footer__box">
                        <b>Company</b>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="footer__box">
                        <b>Social Media</b>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                    
                </div>

                <div className="footer__bottom">
                    <p>© Matheus. Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer