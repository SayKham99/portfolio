import React from 'react'
import './Portfolio.scss'
import Single from '../../assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg'
import {NavLink} from "react-router-dom";

const projects = [
    {id: 1, name: 'Project Title', photo: Single, url: 'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'},
    {id: 2, name: 'Project Title', photo: Single, url: 'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'},
    {id: 3, name: 'Project Title', photo: Single, url: 'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'},
    {id: 4, name: 'Project Title', photo: Single, url: 'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'},
    {id: 5, name: 'Project Title', photo: Single, url: 'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'},
    {id: 6, name: 'Project Title', photo: Single, url: 'https://www.linkedin.com/in/saydullaev-xamidullo-82aaa3247/'},
]

function Portfolio() {
    return (
          <section className='portfolio'>
              <div className='wrapper'>
                  {/*<span>Portfolio</span>
                  <h1 className='title'>Some Of My Creative Work</h1>*/}
                  <div className='projectwrap'>
                      {projects.map(type => (
                            <NavLink to={type.url} className='project' key={type.id}>
                                <p className='project__title'>{type.name}</p>
                                <a className='project__prewiev' href={type.url}>Prewiev</a>
                                <a className='project__source' href={type.url}>Source Code</a>
                                <img className='project__photo' src={type.photo} alt=""/>
                            </NavLink>
                      ))}
                  </div>
              </div>
          </section>
    )
}

export default Portfolio