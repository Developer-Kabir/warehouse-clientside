import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className='about'>
            <div className='about-flex'>
                <div>
                    <h2>ABOUT CAR DEALER</h2>
                    <h6 className='mt-3'>The Elegent Car Warehouse is graced by three elegantly and expertly crafted sedans: the G70, G80, and G90. Each feature the kind of power, performance, and nimble handling that will take your driving experience to new heights. We invite you to explore the model that speaks to you and then contact us to schedule a test drive at your convenience. </h6>
                    <p>
                        Beyond working closely with you to determine which Genesis sedan is perfect for your driving needs, we are also committed to helping you understand which financing package allows you to drive your new G70, G80, or G90 home on your terms, eschewing typical over-the-top sales cues in favor a sophisticated and streamlined purchasing experience.
                        If you’re ready to see what our staff can do for your needs, we invite you to contact us to learn more about our dealership and the Genesis brand. Likewise, you can visit our showroom to learn how Genesis is redefining luxury automotive as a distinctly human pursuit.</p>
                </div>
                <div className='about-extra'>
                    <div className='d-flex'>
                        <div><p className='aboutIcon'><FontAwesomeIcon icon={faCar} /></p></div>
                        <div>
                            <h5>ALL BRANDS</h5>
                            <p>More than 100 brands</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div><p className='aboutIcon'><FontAwesomeIcon icon={faPhone} /></p></div>
                        <div>
                            <h5>FREE SUPPORT</h5>
                            <p>Premium and 24/7</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div><p className='aboutIcon'><FontAwesomeIcon icon={faBusinessTime} /></p></div>
                        <div>
                            <h5>DEALERSHIP</h5>
                            <p>Single or multiple</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div><p className='aboutIcon'><FontAwesomeIcon icon={faCashRegister} /></p></div>
                        <div>
                            <h5>AFFORDABLE</h5>
                            <p>Best suitable price</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-flex'>
                <img
                    className="d-block img-fluid"
                    src="https://i.ibb.co/pvbddm0/man-showing-car.jpg"
                    alt="Man"
                />
            </div>
        </div>
    );
};

export default About;