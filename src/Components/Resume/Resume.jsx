import React from 'react'
import {NavLink, Outlet} from "react-router-dom";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import './Resume.scss'

function Resume() {
    return (<section className='resume'>
        <span>Resume</span>
        <h1 className='title'>Skill & Experience</h1>
        <div className='tabs'>
            <NavLink className='tab' to={'skills'}>
                <p className='links'> Skills</p>
            </NavLink>
            <NavLink className='tab' to={'education'}>
                <p className='links'> Education</p>
            </NavLink>
            <NavLink className='tab' to={'experience'}>
                <p className='links'> Experience </p>
            </NavLink>
        </div>
        <div className='output'>
            <Outlet/>
        </div>
    </section>)
}

export default Resume