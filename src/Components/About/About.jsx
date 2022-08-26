import React from 'react'
import Smooth from '../../assets/smooth.svg'
import Button from "../Button/Button";
import './About.scss'

function About() {
    return (<section className='about'>
        <img src={Smooth} alt="" className='smooth'/>
        <div className='resume'>
            <span>About me</span>
            <h1 className='title'>Saydullaev Khamidullo</h1>
            <p className='descr'>I'm Graphic Designer,and I'm very passionate and dedicated to my work
                With 20 years experience as a professional Photography, I have lot of
                acquired the skills and knowledge necessary to make your project a
                success. I enjoy every step the Photography process,from discussion
                and collaboration.</p>
            <div className='wrap'>
                <div className='wrap__first'>
                    <div className='one'>
                        <b>Birthday : </b><p>18 November 1999</p>
                    </div>
                    <div className='one'>
                        <b>Website : </b><p><a href="https://saykham99" target='_blank'>Click Me</a></p>
                    </div>
                    <div className='one'>
                        <b>Phone : </b><p>+998 90 763 66 69</p>
                    </div>
                    <div className='one'>
                        <b>Study : </b><p><a href="https://t.me/icodeacademyuz1" target='_blank'>I Code Academy</a></p>
                    </div>
                </div>
                <div className='wrap__second'>
                    <div className='one'>
                        <b>Degree : </b><p>Strong Junior</p>
                    </div>
                    <div className='one'>
                        <b>Mail : </b><p><a href="mailto:x5292623@icloud.com">x5292623@icloud.com</a></p>
                    </div>
                    <div className='one'>
                        <b>Linkedin : </b><p><a href="https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/">
                        ClickMe
                    </a>
                    </p>
                    </div>
                    <div className='one'>
                        <b>Freelance : </b><p>Available</p>
                    </div>
                </div>
            </div>
            <Button/>
        </div>
    </section>)
}

export default About