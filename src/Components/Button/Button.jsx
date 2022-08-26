import React from 'react'
import './Button.scss'
import Hamidullo from '../../assets/Hamudullo.pdf'

function Button() {
    return (<>
        <a href={Hamidullo} download className='cvButton'>Download CV</a>
    </>)
}

export default Button