import React from 'react'
import './Social.scss'
import Github from '../../assets/github.svg'
import In from '../../assets/in.svg'
import Tg from '../../assets/tg.svg'
function Social() {
    return (<aside className='social__wrap'>
        <div className='social'>
            <a href={'https://t.me/saykham99'} target='_blank'><img src={Tg} alt=""/></a>
        </div>
        <div className='social'>
            <a href={'https://github.com/saykham99'} target='_blank'><img src={Github} alt=""/></a>
        </div>
        <div className='social'>
            <a href={'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'} target='_blank'><img src={In} alt=""/></a>
        </div>
    </aside>)
}

export default Social