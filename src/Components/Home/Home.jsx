import React from 'react'
import Circle from '../../assets/circle.png'
import MiniCircle from '../../assets/minicircle.png'
import './Home.scss'
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

function Home() {
    return (<section className='home'>
        <img src={Circle} alt="" className='circle'/>
        <img src={MiniCircle} alt="" className='minicircle'/>
        <div className='titles'>
            <p className='welcome'>welcome My Portfolio</p>
            <h1 className='title'>Hello, i‘m Khamidullo <span>Software Developer</span></h1>
            <p className='descr'>Conveniently customize proactive web services for leveraged without
                continualliery aggregate fricctionle ou wellies richard.</p>
            <div className='btns'>
                <NavLink to={'/about'} className='hire'>Hire Me</NavLink>
                <Button/>
            </div>
        </div>
    </section>)
}

export default Home