import React from 'react'
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";
import './Navbar.scss'

const nav = [{id: 1, name: 'Home', url: './'}, {id: 2, name: 'About', url: './about'}, {
    id: 3, name: 'Portfolio', url: './portfolio'
}, {id: 4, name: 'Resume', url: './resume'}, {id: 5, name: 'Contact', url: './contact'},]

function Navbar() {
    return (<>
        <ul className='navwrap'>
            {nav.map(type => (<NavLink key={type.id} to={type.url}>
                <li className='navs'> {type.name} </li>
            </NavLink>))}
            <li className='navs'>
                <Button/>
            </li>
        </ul>
    </>)
}

export default Navbar