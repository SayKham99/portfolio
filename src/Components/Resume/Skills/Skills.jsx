import React, {useEffect} from 'react'
import './Skills.scss'
import Smooth from '../../../assets/smooth.svg'


const skills = [{id: 1, name: 'HTML-CSS', value: '95'}, {id: 2, name: 'Javascript', value: '60'}, {
    id: 3, name: 'React JS', value: '90'
}, {id: 4, name: 'Redux', value: '90'},]

function Skills() {
    return (<section className='skills'>

        <div className='skill'>
            <div className='skillwrap'>
                <div className='back'></div>
                <div className='progress'><p>HTML/CSS</p> <p>95%</p> </div>
            </div>
            <div className='skillwrap'>
                <div className='back'></div>
                <div className='progress'> <p>JavaScript</p> <p>60%</p> </div>
            </div>
            <div className='skillwrap'>
                <div className='back'></div>
                <div className='progress'> <p>React JS</p> <p>90%</p> </div>
            </div>
            <div className='skillwrap'>
                <div className='back'></div>
                <div className='progress'><p>React JS</p><p>90%</p></div>
            </div>
        </div>
        <img src={Smooth} alt=""/>
    </section>)
}

export default Skills